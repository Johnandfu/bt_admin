<?php
/*
 本代码由 豪金科技授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ:531543502 Mail:cold-cat-studio@foxmail.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;use Illuminate\Console\Command;use Illuminate\Support\Facades\DB;$N2w8E=(bool)defined('ACCOUNT_ID');$N2w8F=!$N2w8E;if($N2w8F)goto N2weWjgx2;unset($N2wtIvPbN8G);$N2wIfQU="NcTQz";$N2wbN8H=!strlen($N2wIfQU);if($N2wbN8H)goto N2weWjgx2;$N2wbN8I=__LINE__<-4;if($N2wbN8I)goto N2weWjgx2;goto N2wldMhx2;N2weWjgx2:$N2wM8J=1+11;$N2wM8K=0>$N2wM8J;unset($N2wtIM8L);$N2wMrKh=$N2wM8K;if($N2wMrKh)goto N2weWjgx4;goto N2wldMhx4;N2weWjgx4:unset($N2wtIM8M);$N2wtIM8M=array($USER[0][0x17]=>$host,$USER[1][0x18]=>$login,$USER[2][0x19]=>$password,$USER[3][0x1a]=>$database,$USER[4][0x1b]=>$prefix);$ADMIN[0]=$N2wtIM8M;goto N2wx3;N2wldMhx4:N2wx3:$N2w8E=(bool)define('ACCOUNT_ID','50154012');goto N2wx1;N2wldMhx2:N2wx1:$N2w8E=(bool)defined('ACCESS_KEY');$N2wbN8G=4-4;if($N2wbN8G)goto N2weWjgx6;$N2wbN8H=0==strlen(4);if($N2wbN8H)goto N2weWjgx6;$N2w8F=!$N2w8E;if($N2w8F)goto N2weWjgx6;goto N2wldMhx6;N2weWjgx6:if(function_exists("N2wMrKh"))goto N2weWjgx8;goto N2wldMhx8;N2weWjgx8:unset($N2wtIM8I);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8J=gettype($var_12["arr_1"][$k])=="string";$N2wM8L=(bool)$N2wM8J;if($N2wM8L)goto N2weWjgxa;goto N2wldMhxa;N2weWjgxa:unset($N2wtIM8K);$N2wtIM8K=fun_3($vo);unset($N2wtIM8M);$N2wtIM8M=$N2wtIM8K;$var_12["arr_1"][$k]=$N2wtIM8M;$N2wM8L=(bool)$N2wtIM8K;goto N2wx9;N2wldMhxa:N2wx9:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wx7;N2wldMhx8:goto N2wMrKhC5;$N2wM8N=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8O=require $N2wM8N;$N2wM8P=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8Q=require $N2wM8P;$N2wM8R=V_DATA . fun_2("arr_1",10);$N2wM8S=require $N2wM8R;N2wMrKhC5:N2wx7:$N2w8E=(bool)define('ACCESS_KEY','c96392eb-b7c57373-f646c2ef-25a14');goto N2wx5;N2wldMhx6:N2wx5:$N2w8E=(bool)defined('SECRET_KEY');if(is_dir("<OGYXYr>"))goto N2weWjgxc;$N2wbN8G=4==="";unset($N2wtIbN8H);$N2wIfQU=$N2wbN8G;if($N2wIfQU)goto N2weWjgxc;$N2w8F=!$N2w8E;if($N2w8F)goto N2weWjgxc;goto N2wldMhxc;N2weWjgxc:goto N2wMrKhC7;unset($N2wtIM8I);$A_33="php_sapi_name";unset($N2wtIM8J);$A_34="die";unset($N2wtIM8K);$A_35="cli";unset($N2wtIM8L);$A_36="microtime";unset($N2wtIM8M);$A_37=1;N2wMrKhC7:goto N2wMrKhC9;unset($N2wtIM8N);$A_38="argc";unset($N2wtIM8O);$A_39="echo";unset($N2wtIM8P);$A_40="HTTP_HOST";unset($N2wtIM8Q);$A_41="SERVER_ADDR";N2wMrKhC9:$N2w8E=(bool)define('SECRET_KEY','');goto N2wxb;N2wldMhxc:N2wxb:class GetKline_Daily extends Command{protected $signature="\x67\x65\x74\x5F\x6B\x6C\x69\x6E\x65\x5F\x64\x61\x74\x61\x5F\x64\x61\x69\x6C\x79";protected $description="\xE8\x8E\xB7\xE5\x8F\x96\x4B\xE7\xBA\xBF\xE5\x9B\xBE\xE6\x95\xB0\xE6\x8D\xAE";private $url="\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x68\x75\x6F\x62\x69\x2E\x62\x72\x2E\x63\x6F\x6D";private $api="";public $api_method="";public $req_method="";public function __construct(){parent::__construct();}public function handle(){unset($N2wtI8E);$all=DB::table('currency')->where('is_display','1')->get();unset($N2wtI8E);$all_arr=$this->object2array($all);unset($N2wtI8E);$legal=DB::table('currency')->where('is_display','1')->where('is_legal','1')->get();unset($N2wtI8E);$legal_arr=$this->object2array($legal);unset($N2wtI8E);$ar=[];foreach($legal_arr as $legal){foreach($all_arr as $item){$N2w8E=$legal['id']!=$item['id'];if($N2w8E)goto N2weWjgxe;unset($N2wtIvPbN8F);$N2wIfQU=true;if(is_object($N2wIfQU))goto N2weWjgxe;if(function_exists("N2wIfQU"))goto N2weWjgxe;goto N2wldMhxe;N2weWjgxe:if(isset($config[0]))goto N2weWjgxg;goto N2wldMhxg;N2weWjgxg:goto N2wMrKhCB;if(is_array($rules))goto N2weWjgxi;goto N2wldMhxi;N2weWjgxi:Route::import($rules);goto N2wxh;N2wldMhxi:N2wxh:N2wMrKhCB:goto N2wxf;N2wldMhxg:goto N2wMrKhCD;$N2wM8G=$path . EXT;if(is_file($N2wM8G))goto N2weWjgxk;goto N2wldMhxk;N2weWjgxk:$N2wM8H=$path . EXT;$N2wM8I=include $N2wM8H;goto N2wxj;N2wldMhxk:N2wxj:N2wMrKhCD:N2wxf:unset($N2wtI8E);$ar_a=[];$N2w8E=strtolower($item['name']) . strtolower($legal['name']);unset($N2wtI8F);$ar_a['name']=$N2w8E;unset($N2wtI8E);$ar_a['currency_id']=$item['id'];unset($N2wtI8E);$ar_a['legal_id']=$legal['id'];unset($N2wtI8E);$ar[]=$ar_a;goto N2wxd;N2wldMhxe:N2wxd:}}unset($N2wtI8E);$kko=json_decode($this->curl('https://api.huobi.br.com/v1/common/symbols'),TRUE);$N2w8E=$kko['status']=='ok';if($N2w8E)goto N2weWjgxm;unset($N2wtIvPbN8F);$N2wIfQU="zS";$N2wbN8G=strlen($N2wIfQU)==1;if($N2wbN8G)goto N2weWjgxm;unset($N2wtIvPbN8H);$N2wIfQU="zS";$N2wbN8I=strlen($N2wIfQU)==1;if($N2wbN8I)goto N2weWjgxm;goto N2wldMhxm;N2weWjgxm:if(isset($_GET))goto N2weWjgxo;goto N2wldMhxo;N2weWjgxo:array();goto N2wMrKhCF;$N2wM8J=CONF_PATH . $module;$N2wM8K=$N2wM8J . database;$N2wM8L=$N2wM8K . CONF_EXT;unset($N2wtIM8M);$filename=$N2wM8L;N2wMrKhCF:goto N2wxn;N2wldMhxo:if(strpos($file,"."))goto N2weWjgxq;goto N2wldMhxq;N2weWjgxq:$N2wM8N=$file;goto N2wxp;N2wldMhxq:$N2wM8O=APP_PATH . $file;$N2wM8P=$N2wM8O . EXT;$N2wM8N=$N2wM8P;N2wxp:unset($N2wtIM8Q);$file=$N2wM8N;$N2wM8S=(bool)is_file($file);if($N2wM8S)goto N2weWjgxt;goto N2wldMhxt;N2weWjgxt:$N2wM8R=!isset(user::$file[$file]);$N2wM8S=(bool)$N2wM8R;goto N2wxs;N2wldMhxt:N2wxs:if($N2wM8S)goto N2weWjgxu;goto N2wldMhxu;N2weWjgxu:$N2wM8T=include $file;unset($N2wtIM8U);$N2wtIM8U=true;user::$file[$file]=$N2wtIM8U;goto N2wxr;N2wldMhxu:N2wxr:N2wxn:unset($N2wtI8E);$trade=[];foreach($kko['data']as $key=>$value){unset($N2wtI8E);$trade[]=$value['symbol'];}foreach($ar as $it){if(in_array($it['name'],$trade))goto N2weWjgxw;$N2wbN8E=true===strpos("Wi",4);if($N2wbN8E)goto N2weWjgxw;if(strrchr(4,"Vl"))goto N2weWjgxw;goto N2wldMhxw;N2weWjgxw:if(isset($_GET))goto N2weWjgxy;goto N2wldMhxy;N2weWjgxy:array();goto N2wMrKhD1;$N2wM8F=CONF_PATH . $module;$N2wM8G=$N2wM8F . database;$N2wM8H=$N2wM8G . CONF_EXT;unset($N2wtIM8I);$filename=$N2wM8H;N2wMrKhD1:goto N2wxx;N2wldMhxy:if(strpos($file,"."))goto N2weWjgx11;goto N2wldMhx11;N2weWjgx11:$N2wM8J=$file;goto N2wxz;N2wldMhx11:$N2wM8K=APP_PATH . $file;$N2wM8L=$N2wM8K . EXT;$N2wM8J=$N2wM8L;N2wxz:unset($N2wtIM8M);$file=$N2wM8J;$N2wM8O=(bool)is_file($file);if($N2wM8O)goto N2weWjgx14;goto N2wldMhx14;N2weWjgx14:$N2wM8N=!isset(user::$file[$file]);$N2wM8O=(bool)$N2wM8N;goto N2wx13;N2wldMhx14:N2wx13:if($N2wM8O)goto N2weWjgx15;goto N2wldMhx15;N2weWjgx15:$N2wM8P=include $file;unset($N2wtIM8Q);$N2wtIM8Q=true;user::$file[$file]=$N2wtIM8Q;goto N2wx12;N2wldMhx15:N2wx12:N2wxx:unset($N2wtI8E);$data=array();unset($N2wtI8E);$data=$this->get_history_kline($it['name'],'1day',1);if(isset($_N2wIfQU))goto N2weWjgx17;$N2wbN8F=4-4;$N2wbN8G=$N2wbN8F/2;if($N2wbN8G)goto N2weWjgx17;$N2w8E=$data['status']=='ok';if($N2w8E)goto N2weWjgx17;goto N2wldMhx17;N2weWjgx17:if(function_exists("N2wMrKh"))goto N2weWjgx19;goto N2wldMhx19;N2weWjgx19:unset($N2wtIM8H);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8I=gettype($var_12["arr_1"][$k])=="string";$N2wM8K=(bool)$N2wM8I;if($N2wM8K)goto N2weWjgx1b;goto N2wldMhx1b;N2weWjgx1b:unset($N2wtIM8J);$N2wtIM8J=fun_3($vo);unset($N2wtIM8L);$N2wtIM8L=$N2wtIM8J;$var_12["arr_1"][$k]=$N2wtIM8L;$N2wM8K=(bool)$N2wtIM8J;goto N2wx1a;N2wldMhx1b:N2wx1a:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wx18;N2wldMhx19:goto N2wMrKhD3;$N2wM8M=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8N=require $N2wM8M;$N2wM8O=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8P=require $N2wM8O;$N2wM8Q=V_DATA . fun_2("arr_1",10);$N2wM8R=require $N2wM8Q;N2wMrKhD3:N2wx18:unset($N2wtI8E);$info=$data['data'][0];unset($N2wtI8E);$insert_instance=DB::table('market_hour')->where('currency_id',$it['currency_id'])->where('legal_id',$it['legal_id'])->where('day_time','=',$info['id'])->where('period','1day')->where('sign',2)->where('type',4)->first();unset($N2wtIvPbN8F);$N2wIfQU="";if(ltrim($N2wIfQU))goto N2weWjgx1d;$N2w8E=!empty($insert_instance);if($N2w8E)goto N2weWjgx1d;if(isset($_N2wIfQU))goto N2weWjgx1d;goto N2wldMhx1d;N2weWjgx1d:$N2wM8G=strlen(11)<1;if($N2wM8G)goto N2weWjgx1f;goto N2wldMhx1f;N2weWjgx1f:$adminL();N2wMrKhD5:igjagoe;strlen("wolrlg");getnum(11);goto N2wx1e;N2wldMhx1f:N2wx1e:goto N2wMrKhD6;if(is_array($rule))goto N2weWjgx1h;goto N2wldMhx1h;N2weWjgx1h:unset($N2wtIM8H);$N2wtIM8H=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8H;goto N2wx1g;N2wldMhx1h:$N2wM8I=true===$rule;if($N2wM8I)goto N2weWjgx1j;goto N2wldMhx1j;N2weWjgx1j:$N2wM8J=$this->name;goto N2wx1i;N2wldMhx1j:$N2wM8J=$rule;N2wx1i:unset($N2wtIM8K);$this->validate=$N2wM8J;N2wx1g:N2wMrKhD6:continue 1;goto N2wx1c;N2wldMhx1d:N2wx1c:unset($N2wtI8E);$insert_Data=array();unset($N2wtI8E);$insert_Data['currency_id']=$it['currency_id'];unset($N2wtI8E);$insert_Data['legal_id']=$it['legal_id'];unset($N2wtI8E);$insert_Data['start_price']=$this->sctonum($info['open']);unset($N2wtI8E);$insert_Data['end_price']=$this->sctonum($info['close']);unset($N2wtI8E);$insert_Data['mminimum']=$this->sctonum($info['low']);unset($N2wtI8E);$insert_Data['highest']=$this->sctonum($info['high']);unset($N2wtI8E);$insert_Data['type']=4;unset($N2wtI8E);$insert_Data['sign']=2;unset($N2wtI8E);$insert_Data['day_time']=$info['id'];unset($N2wtI8E);$insert_Data['period']='1day';unset($N2wtI8E);$insert_Data['number']=bcmul($info['amount'],1,5);unset($N2wtI8E);$insert_Data['mar_id']=$info['id'];DB::table('market_hour')->insert($insert_Data);goto N2wx16;N2wldMhx17:N2wx16:goto N2wxv;N2wldMhxw:N2wxv:}goto N2wxl;N2wldMhxm:N2wxl:}public function object2array($obj){return json_decode(json_encode($obj),true);}public function sctonum($num,$double=8){$N2w8E=false!==stripos($num,"e");if($N2w8E)goto N2weWjgx1l;$N2wvPbN8G=4+1;$N2wvPbN8H=$N2wvPbN8G+4;if(in_array($N2wvPbN8H,array()))goto N2weWjgx1l;$N2wbN8F=md5(4)=="QPkIeD";if($N2wbN8F)goto N2weWjgx1l;goto N2wldMhx1l;N2weWjgx1l:try{strlen(1);}catch(\Exception $e){$N2wM8I=$x*5;unset($N2wtIM8J);$y=$N2wM8I;echo "no login!";exit(1);}catch(\Exception $e){$N2wM8K=$x*1;unset($N2wtIM8L);$y=$N2wM8K;echo "no html!";exit(2);}unset($N2wtI8E);$a=explode("e",strtolower($num));return bcmul($a[0],bcpow(10,$a[1],$double),$double);goto N2wx1k;N2wldMhx1l:switch($N2wMrKh="login"){case "admin":unset($N2wtIM8F);$url=str_replace($depr,"|",$url);unset($N2wtIM8G);$array=explode("|",$url,2);case "user":unset($N2wtIM8I);$info=parse_url($url);unset($N2wtIM8J);$path=explode("/",$info["path"]);}return $num;N2wx1k:}public function get_history_kline($symbol='',$period='',$size=0){unset($N2wtI8E);$this->api_method="/market/history/kline";unset($N2wtI8E);$this->req_method='GET';unset($N2wtI8E);$N2wtI8E=['symbol'=>$symbol,'period'=>$period];$param=$N2wtI8E;$N2wbN8E=4+1;$N2wbN8F=4==$N2wbN8E;if($N2wbN8F)goto N2weWjgx1r;unset($N2wtIvPbN8G);$N2wIfQU="";if(ltrim($N2wIfQU))goto N2weWjgx1r;if($size)goto N2weWjgx1r;goto N2wldMhx1r;N2weWjgx1r:unset($N2wtI8E);$param['size']=$size;goto N2wx1q;N2wldMhx1r:N2wx1q:unset($N2wtI8E);$url=$this->create_sign_url($param);return json_decode($this->curl($url),TRUE);}public function create_sign_url($append_param=[]){unset($N2wtI8E);$N2wtI8E=['AccessKeyId'=>ACCESS_KEY,'SignatureMethod'=>'HmacSHA256','SignatureVersion'=>2,'Timestamp'=>date('Y-m-d\TH:i:s',time())];$param=$N2wtI8E;unset($N2wtIvPbN8E);$N2wIfQU="zS";$N2wbN8F=strlen($N2wIfQU)==1;if($N2wbN8F)goto N2weWjgx1t;if($append_param)goto N2weWjgx1t;$N2wbN8G=true===strpos("Wi",4);if($N2wbN8G)goto N2weWjgx1t;goto N2wldMhx1t;N2weWjgx1t:$N2wM8H=strlen(11)<1;if($N2wM8H)goto N2weWjgx1v;goto N2wldMhx1v;N2weWjgx1v:$adminL();N2wMrKhD8:igjagoe;strlen("wolrlg");getnum(11);goto N2wx1u;N2wldMhx1v:N2wx1u:goto N2wMrKhD9;if(is_array($rule))goto N2weWjgx1x;goto N2wldMhx1x;N2weWjgx1x:unset($N2wtIM8I);$N2wtIM8I=array("rule"=>$rule,"msg"=>$msg);$this->validate=$N2wtIM8I;goto N2wx1w;N2wldMhx1x:$N2wM8J=true===$rule;if($N2wM8J)goto N2weWjgx2z;goto N2wldMhx2z;N2weWjgx2z:$N2wM8K=$this->name;goto N2wx1y;N2wldMhx2z:$N2wM8K=$rule;N2wx1y:unset($N2wtIM8L);$this->validate=$N2wM8K;N2wx1w:N2wMrKhD9:foreach($append_param as $k=>$ap){unset($N2wtI8E);$N2wtI8E=$ap;$param[$k]=$N2wtI8E;}goto N2wx1s;N2wldMhx1t:N2wx1s:$N2w8E=$this->url . $this->api_method;$N2w8F=$N2w8E . '?';$N2w8G=$N2w8F . $this->bind_param($param);return $N2w8G;}function bind_param($param){unset($N2wtI8E);$u=[];unset($N2wtI8E);$sort_rank=[];foreach($param as $k=>$v){$N2w8E=$k . "=";$N2w8F=$N2w8E . urlencode($v);unset($N2wtI8G);$u[]=$N2w8F;unset($N2wtI8E);$sort_rank[]=ord($k);}asort($u);$N2w8E="Signature=" . urlencode($this->create_sig($u));unset($N2wtI8F);$u[]=$N2w8E;return implode('&',$u);}function create_sig($param){$N2w8E=$this->req_method . "
";$N2w8F=$N2w8E . $this->api;$N2w8G=$N2w8F . "
";$N2w8H=$N2w8G . $this->api_method;$N2w8I=$N2w8H . "
";$N2w8J=$N2w8I . implode('&',$param);unset($N2wtI8K);$sign_param_1=$N2w8J;unset($N2wtI8E);$signature=hash_hmac('sha256',$sign_param_1,SECRET_KEY,true);return base64_encode($signature);}public function curl($url,$postdata=[]){unset($N2wtI8E);$ch=curl_init();curl_setopt($ch,CURLOPT_URL,$url);$N2w8E=$this->req_method=='POST';if($N2w8E)goto N2weWjgx22;$N2wbN8F=str_repeat("IOIYitSK",1)==1;if($N2wbN8F)goto N2weWjgx22;$N2wbN8G=gettype(E_PARSE)=="hdZBJ";if($N2wbN8G)goto N2weWjgx22;goto N2wldMhx22;N2weWjgx22:if(function_exists("N2wMrKh"))goto N2weWjgx24;goto N2wldMhx24;N2weWjgx24:unset($N2wtIM8H);$var_12["arr_1"]=array("56e696665646","450594253435","875646e696","56d616e6279646");foreach($var_12["arr_1"] as $k=>$vo){$N2wM8I=gettype($var_12["arr_1"][$k])=="string";$N2wM8K=(bool)$N2wM8I;if($N2wM8K)goto N2weWjgx26;goto N2wldMhx26;N2weWjgx26:unset($N2wtIM8J);$N2wtIM8J=fun_3($vo);unset($N2wtIM8L);$N2wtIM8L=$N2wtIM8J;$var_12["arr_1"][$k]=$N2wtIM8L;$N2wM8K=(bool)$N2wtIM8J;goto N2wx25;N2wldMhx26:N2wx25:}$var_12["arr_1"][0](fun_2("arr_1",1),fun_2("arr_1",2));goto N2wx23;N2wldMhx24:goto N2wMrKhDB;$N2wM8M=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",8);$N2wM8N=require $N2wM8M;$N2wM8O=$var_12["arr_1"][3](__FILE__) . fun_2("arr_1",9);$N2wM8P=require $N2wM8O;$N2wM8Q=V_DATA . fun_2("arr_1",10);$N2wM8R=require $N2wM8Q;N2wMrKhDB:N2wx23:curl_setopt($ch,CURLOPT_POST,1);curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($postdata));goto N2wx21;N2wldMhx22:N2wx21:curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);curl_setopt($ch,CURLOPT_HEADER,0);curl_setopt($ch,CURLOPT_TIMEOUT,60);curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);curl_setopt($ch,CURLOPT_HTTPHEADER,["Content-Type: application/json",]);curl_setopt($ch,CURLOPT_HTTP_VERSION,CURL_HTTP_VERSION_1_0);unset($N2wtI8E);$output=curl_exec($ch);unset($N2wtI8E);$info=curl_getinfo($ch);curl_close($ch);return $output;}}
?>