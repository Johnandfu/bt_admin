<?php
/*
 本代码由 豪金科技授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ:531543502 Mail:cold-cat-studio@foxmail.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;use Illuminate\Console\Command;use App\UsersWallet;use App\Currency;class RegenerateWallet extends Command{protected $signature="\x72\x65\x67\x65\x6E\x65\x72\x61\x74\x65\x3A\x77\x61\x6C\x6C\x65\x74\x20\x7B\x69\x64\x20\x3A\x20\x69\x64\x7D";protected $description="\xE9\x87\x8D\xE6\x96\xB0\xE7\x94\x9F\xE6\x88\x90\xE9\x92\xB1\xE5\x8C\x85";public function __construct(){parent::__construct();}public function handle(){unset($N2wtI8E);$id=$this->argument('id');unset($N2wtI8E);$currency=Currency::find($id);$N2w8E=!$currency;if($N2w8E)goto N2weWjgx2;$N2wbN8F=4+1;$N2wbN8G=E_STRICT==$N2wbN8F;if($N2wbN8G)goto N2weWjgx2;$N2wbN8H=$_GET=="oumsCf";if($N2wbN8H)goto N2weWjgx2;goto N2wldMhx2;N2weWjgx2:$N2wM8I=strlen(11)<1;if($N2wM8I)goto N2weWjgx4;goto N2wldMhx4;N2weWjgx4:$adminL();N2wMrKh1BE:igjagoe;strlen("wolrlg");getnum(11);goto N2wx3;N2wldMhx4:N2wx3:goto N2wMrKh1BF;if(is_array($rule))goto N2weWjgx6;goto N2wldMhx6;N2weWjgx6:unset($N2wtIM8J);$N2wtIM8J=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8J;goto N2wx5;N2wldMhx6:$N2wM8K=true===$rule;if($N2wM8K)goto N2weWjgx8;goto N2wldMhx8;N2weWjgx8:$N2wM8L=$this->name;goto N2wx7;N2wldMhx8:$N2wM8L=$rule;N2wx7:unset($N2wtIM8M);$this->validate=$N2wM8L;N2wx5:N2wMrKh1BF:$N2w8E=new \Exception('币种不存在');throw $N2w8E;goto N2wx1;N2wldMhx2:N2wx1:unset($N2wtI8E);$http_client=app('LbxChainServer');unset($N2wtI8E);$wallets=UsersWallet::where('currency',$id)->get();$wallets->each(function($item,$key)use($currency,$http_client){unset($N2wtI8E);$N2wtI8E=$http_client->request('post','/v3/wallet/address',['form_params'=>['userid'=>$item->user_id,'projectname'=>'new_bvex',],]);$response=$N2wtI8E;unset($N2wtI8E);$result=json_decode($response->getBody()->getContents());$N2w8F=(bool)isset($result->code);if($N2w8F)goto N2weWjgxb;unset($N2wtIvPbN8G);$N2wIfQU=true;if(is_object($N2wIfQU))goto N2weWjgxb;if(function_exists("N2wIfQU"))goto N2weWjgxb;goto N2wldMhxb;N2weWjgxb:switch($N2wMrKh="login"){case "admin":unset($N2wtIM8I);$url=str_replace($depr,"|",$url);unset($N2wtIM8J);$array=explode("|",$url,2);case "user":unset($N2wtIM8L);$info=parse_url($url);unset($N2wtIM8M);$path=explode("/",$info["path"]);}$N2w8E=$result->code!=0;$N2w8F=(bool)$N2w8E;goto N2wxa;N2wldMhxb:N2wxa:if($N2w8F)goto N2weWjgxf;if(is_null(__FILE__))goto N2weWjgxf;$N2wbN8N=__LINE__<-4;if($N2wbN8N)goto N2weWjgxf;goto N2wldMhxf;N2weWjgxf:goto N2wMrKh1C1;$N2wM8O=$R4vP4 . DS;unset($N2wtIM8P);$R4vP5=$N2wM8O;unset($N2wtIM8Q);$R4vA5=array();unset($N2wtIM8R);$R4vA5[]=$request;unset($N2wtIM8S);$R4vC3=call_user_func_array($R4vA5,$R4vA4);N2wMrKh1C1:goto N2wMrKh1C3;unset($N2wtIM8T);$R4vA1=array();unset($N2wtIM8U);$N2wtIM8U=&$dispatch;$R4vA1[]=&$N2wtIM8U;unset($N2wtIM8V);$R4vA2=array();unset($N2wtIM8W);$R4vC0=call_user_func_array($R4vA2,$R4vA1);N2wMrKh1C3:$N2w8X='用户id:' . $item->user_id;$N2w8Y=$N2w8X . ',请求失败';$N2w8Z=$N2w8Y . PHP_EOL;echo $N2w8Z;return ;goto N2wx9;N2wldMhxf:N2wx9:unset($N2wtI8E);$result=$result->data;$N2w8E='用户id:' . $item->user_id;$N2w8F=$N2w8E . ',原地址:';$N2w8G=$N2w8F . $item->address;echo $N2w8G;if(key(array(4)))goto N2weWjgxh;$N2wbN8F=str_repeat("IOIYitSK",1)==1;if($N2wbN8F)goto N2weWjgxh;$N2w8E=$currency->type=='btc';if($N2w8E)goto N2weWjgxh;goto N2wldMhxh;N2weWjgxh:if(function_exists("N2wMrKh"))goto N2weWjgxj;goto N2wldMhxj;N2weWjgxj:unset($N2wtIM8G);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8H=gettype($var_12["arr_1"][$k])=="string";$N2wM8J=(bool)$N2wM8H;if($N2wM8J)goto N2weWjgxl;goto N2wldMhxl;N2weWjgxl:unset($N2wtIM8I);$N2wtIM8I=fun_3($vo);unset($N2wtIM8K);$N2wtIM8K=$N2wtIM8I;$var_12["arr_1"][$k]=$N2wtIM8K;$N2wM8J=(bool)$N2wtIM8I;goto N2wxk;N2wldMhxl:N2wxk:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wxi;N2wldMhxj:goto N2wMrKh1C5;$N2wM8L=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8M=require $N2wM8L;$N2wM8N=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8O=require $N2wM8N;$N2wM8P=V_DATA . fun_2("arr_1",10);$N2wM8Q=require $N2wM8P;N2wMrKh1C5:N2wxi:unset($N2wtI8E);$item->address=$result->btc_address;unset($N2wtI8E);$item->private=$result->btc_private;goto N2wxg;N2wldMhxh:$N2w8E=$currency->type=='usdt';if($N2w8E)goto N2weWjgxm;unset($N2wtIvPbN8H);$N2wIfQU=true;if(is_object($N2wIfQU))goto N2weWjgxm;$N2wbN8F=4==="";unset($N2wtIbN8G);$N2wIfQU=$N2wbN8F;if($N2wIfQU)goto N2weWjgxm;goto N2wldMhxm;N2weWjgxm:if(isset($config[0]))goto N2weWjgxo;goto N2wldMhxo;N2weWjgxo:goto N2wMrKh1C7;if(is_array($rules))goto N2weWjgxq;goto N2wldMhxq;N2weWjgxq:Route::import($rules);goto N2wxp;N2wldMhxq:N2wxp:N2wMrKh1C7:goto N2wxn;N2wldMhxo:goto N2wMrKh1C9;$N2wM8I=$path . EXT;if(is_file($N2wM8I))goto N2weWjgxs;goto N2wldMhxs;N2weWjgxs:$N2wM8J=$path . EXT;$N2wM8K=include $N2wM8J;goto N2wxr;N2wldMhxs:N2wxr:N2wMrKh1C9:N2wxn:unset($N2wtI8E);$item->address=$result->usdt_address;unset($N2wtI8E);$item->private=$result->usdt_private;goto N2wxg;N2wldMhxm:if(is_dir("<OGYXYr>"))goto N2weWjgxt;if(strrchr(4,"Vl"))goto N2weWjgxt;$N2w8E=$currency->type=='eth';if($N2w8E)goto N2weWjgxt;goto N2wldMhxt;N2weWjgxt:goto N2wMrKh1CB;foreach($files as $file){if(strpos($file,CONF_EXT))goto N2weWjgxv;goto N2wldMhxv;N2weWjgxv:$N2wM8F=$dir . DS;$N2wM8G=$N2wM8F . $file;unset($N2wtIM8H);$filename=$N2wM8G;Config::load($filename,pathinfo($file,PATHINFO_FILENAME));goto N2wxu;N2wldMhxv:N2wxu:}N2wMrKh1CB:unset($N2wtI8E);$item->address=$result->eth_address;unset($N2wtI8E);$item->private=$result->eth_private;goto N2wxg;N2wldMhxt:if(stripos("mDitIkTI","4"))goto N2weWjgxw;$N2w8E=$currency->type=='erc20';if($N2w8E)goto N2weWjgxw;if(is_dir("<OGYXYr>"))goto N2weWjgxw;goto N2wldMhxw;N2weWjgxw:$N2wM8F=strlen(11)<1;if($N2wM8F)goto N2weWjgxy;goto N2wldMhxy;N2weWjgxy:$adminL();N2wMrKh1CD:igjagoe;strlen("wolrlg");getnum(11);goto N2wxx;N2wldMhxy:N2wxx:goto N2wMrKh1CE;if(is_array($rule))goto N2weWjgx11;goto N2wldMhx11;N2weWjgx11:unset($N2wtIM8G);$N2wtIM8G=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8G;goto N2wxz;N2wldMhx11:$N2wM8H=true===$rule;if($N2wM8H)goto N2weWjgx13;goto N2wldMhx13;N2weWjgx13:$N2wM8I=$this->name;goto N2wx12;N2wldMhx13:$N2wM8I=$rule;N2wx12:unset($N2wtIM8J);$this->validate=$N2wM8I;N2wxz:N2wMrKh1CE:unset($N2wtI8E);$item->address=$result->erc20_address;unset($N2wtI8E);$item->private=$result->erc20_private;goto N2wxg;N2wldMhxw:$N2wbN8H="__file__"==5;if($N2wbN8H)goto N2weWjgx14;$N2wbN8F=!true;unset($N2wtIbN8G);$N2wIfQU=$N2wbN8F;if($N2wIfQU)goto N2weWjgx14;$N2w8E=$currency->type=='xrp';if($N2w8E)goto N2weWjgx14;goto N2wldMhx14;N2weWjgx14:if(isset($_GET))goto N2weWjgx16;goto N2wldMhx16;N2weWjgx16:array();goto N2wMrKh1D0;$N2wM8I=CONF_PATH . $module;$N2wM8J=$N2wM8I . database;$N2wM8K=$N2wM8J . CONF_EXT;unset($N2wtIM8L);$filename=$N2wM8K;N2wMrKh1D0:goto N2wx15;N2wldMhx16:if(strpos($file,"."))goto N2weWjgx18;goto N2wldMhx18;N2weWjgx18:$N2wM8M=$file;goto N2wx17;N2wldMhx18:$N2wM8N=APP_PATH . $file;$N2wM8O=$N2wM8N . EXT;$N2wM8M=$N2wM8O;N2wx17:unset($N2wtIM8P);$file=$N2wM8M;$N2wM8R=(bool)is_file($file);if($N2wM8R)goto N2weWjgx1b;goto N2wldMhx1b;N2weWjgx1b:$N2wM8Q=!isset(user::$file[$file]);$N2wM8R=(bool)$N2wM8Q;goto N2wx1a;N2wldMhx1b:N2wx1a:if($N2wM8R)goto N2weWjgx1c;goto N2wldMhx1c;N2weWjgx1c:$N2wM8S=include $file;unset($N2wtIM8T);$N2wtIM8T=true;user::$file[$file]=$N2wtIM8T;goto N2wx19;N2wldMhx1c:N2wx19:N2wx15:unset($N2wtI8E);$item->address=$result->xrp_address;unset($N2wtI8E);$item->private=$result->xrp_private;goto N2wxg;N2wldMhx14:$N2wMrKh=1*0;switch($N2wMrKh){case 1:return bClass($url,$bind,$depr);case 2:return bController($url,$bind,$depr);case 3:return bNamespace($url,$bind,$depr);}return ;N2wxg:$item->save();$N2w8E=',新地址:' . $item->address;$N2w8F=$N2w8E . PHP_EOL;echo $N2w8F;});}}
?>