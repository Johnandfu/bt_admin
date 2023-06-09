<?php

namespace App\Http\Controllers\Admin;


use App\Admin;
use App\AdminRole;
use App\Agent;
use App\Users;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Google;

class AdminController extends Controller{

    public function users(){
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $adminuser = Admin::all();
        $count = $adminuser -> count();
        return response()->json(['code'=>0,'count'=>$count,'msg'=>'','data'=>$adminuser]);
    }

    public function add()
    {
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $id = Input::get('id',null);
        if(empty($id)) {
            $adminUser = new Admin();
        }else{
            $adminUser = Admin::find($id);
            if($adminUser == null) {
                abort(404);
            }
        }
        $roles = AdminRole::all();
        return view('admin.manager.add', ['admin_user' => $adminUser, 'roles' => $roles]);
    }

    public function postAdd(Request $request)
    {
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $id = Input::get('id', null);
        $validator = Validator::make(Input::all(), [
            'username' => 'required',
            'role_id' => 'required|numeric'
        ], [
            'username.required' => '姓名必须填写',
            'role_id.required'  => '角色必须选择',
            'role_id.numeric'   => '角色必须为数字'
        ]);
        if(empty($id)) {
            $adminUser = new Admin();
        }else{
            $adminUser = Admin::find($id);
            if($adminUser == null) {
                return redirect()->back();
            }
        }
        $password = Input::get('password', '');
        $adminUser->role_id = Input::get('role_id', '0');
        if(Input::get('password', '') != '') {
            $adminUser->password = Users::MakePassword($password);
        }
        $validator->after(function($validator) use ($adminUser, $id)
        {
            if(empty($id)) {
                if (Admin::where('username', Input::get('username'))->exists()) {
                    $validator->errors()->add('username', '用户已经存在');
                }
            }
        });

        $adminUser->username = Input::get('username', '');
        if($validator->fails()) {
            return $this->error($validator->errors()->first());
        }
        try {
            $adminUser->save();
        }catch (\Exception $ex){
            $validator->errors()->add('error', $ex->getMessage());
            return $this->error($validator->errors()->first());
        }
        return $this->success('添加成功');
    }

    public function del()
    {
        $admin = Admin::find(Input::get('id'));
        if($admin == null) {
            abort(404);
        }
        $bool = $admin->delete();
        if($bool){
            return $this->success('删除成功');
        }else{
            return $this->error('删除失败');
        }
    }

    public function agent(){

        $admin = Agent::where('is_admin' , 1)->where('level' , 0)->first();

        if ($admin != null ){
            return redirect(route('agent'));
        }else{
            $hkok = DB::table('admin')->where('id' , 1)->first();

            if ($hkok != null ){
                $insertData = [];
                $insertData['user_id'] = $hkok->id;
                $insertData['username'] = $hkok->username;
                $insertData['password'] = $hkok->password;
                $insertData['level'] = 0;
                $insertData['is_admin'] = 1;
                $insertData['reg_time'] = time();
                $insertData['pro_loss'] = 100.00;
                $insertData['pro_ser'] = 100.00;

                $id = DB::table('agent')->insertGetId($insertData);

                if ($id>0){
                    return redirect(route('agent'));
                }else{
                    return $this->error('失败');
                }
            }
        }
    }
    public function google(){
        $id = Input::get('id',null);
        $adminUser = Admin::find($id);
        if($adminUser == null) {
            abort(404);
        }
        // 创建谷歌验证码
        $createSecret = Google::CreateSecret();
        // 您自定义的参数，随表单返回,用于绑定
        $parameter = [["name"=>"user_id","value"=>$id]];
        return view('admin.manager.google', ['createSecret' => $createSecret,"parameter" => $parameter]);
    }
    public function checkGoolge(Request $request){

        if (empty($request->onecode) && strlen($request->onecode) != 6) return back()->with('msg','请正确输入手机上google验证码 ！')->withInput();
        // google密钥，绑定的时候为生成的密钥；如果是绑定后登录，从数据库取以前绑定的密钥
        $google = $request->google;
        // 验证验证码和密钥是否相同
        if(Google::CheckCode($google,$request->onecode)) {
            // 绑定场景：绑定成功，向数据库插入google参数，跳转到登录界面让用户登录
            Admin::query()->where('id',$request->user_id)->update(['google'=>$google]);
            // 登录认证场景：认证成功，执行认证操作
            dd("认证成功");
        }
        else
        {
            // 绑定场景：认证失败，返回重新绑定，刷新新的二维码
            return back()->with('msg','请正确输入手机上google验证码 ！')->withInput();
            // 登录认证场景：认证失败，返回重新绑定，刷新新的二维码
            return back()->with('msg','验证码错误，请输入正确的验证码 ！')->withInput();
        }
    }

}
?>