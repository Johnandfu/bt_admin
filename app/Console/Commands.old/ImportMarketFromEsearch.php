<?php
/*
*/

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\MarketHour;
use Elasticsearch\ClientBuilder;
use App\CurrencyMatch;

class ImportMarketFromEsearch extends Command
{
    protected $signature = "\x6D\x61\x72\x6B\x65\x74\x3A\x69\x6D\x70\x6F\x72\x74";
    protected $description = "\x43\x6F\x6D\x6D\x61\x6E\x64\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E";
    public function __construct()
    {
        parent::__construct();
    }
    public function handle()
    {
        unset($N2wtI8E);
        $from_host = ['http://mhy.happyawn.com:9200', '39.109.113.168:9200',];
        unset($N2wtI8E);
        $to_host = ['45.192.181.101:9200',];
        unset($N2wtI8E);
        $N2wtI8E = ['host' => '39.109.113.168:9200'];
        $from_host = $N2wtI8E;
        unset($N2wtI8E);
        $N2wtI8E = ['host' => '45.192.181.101:9200'];
        $to_host = $N2wtI8E;
        unset($N2wtI8E);
        $from_client = self::getEsearchClient($from_host);
        unset($N2wtI8E);
        $to_client = self::getEsearchClient($to_host);
        unset($N2wtI8E);
        $huobi_matchs = CurrencyMatch::getHuobiMatchs();
        unset($N2wtI8E);
        $from = 1543593600;
        unset($N2wtI8E);
        $to = 1545235200;
        foreach ($huobi_matchs as $key => $match) {
            unset($N2wtI8E);
            $base_currency = $match->currency_name;
            unset($N2wtI8E);
            $quote_currency = $match->legal_name;
            $N2wvP8E = $base_currency . '.';
            $N2wvP8F = $N2wvP8E . $quote_currency;
            $N2w8G = strtoupper($N2wvP8F) . '.1day';
            unset($N2wtI8H);
            $type = $N2w8G;
            unset($N2wtI8E);
            $result = self::getEsearchMarket($from_client, $base_currency, $quote_currency, '1day', $from, $to);
            unset($N2wtI8E);
            $params = [];
            foreach ($result as $key => $value) {
                unset($N2wtI8E);
                $N2wtI8E = ['index' => ['_index' => 'market.kline', '_type' => $type,]];
                $params['body'][] = $N2wtI8E;
                unset($N2wtI8E);
                $params['body'][] = $value;
            }
            unset($N2wtI8E);
            $result = $to_client->bulk($params);
            var_dump($result);
        }
    }
    public static function getEsearchClient($hosts)
    {
        unset($N2wtI8E);
        $es_client = ClientBuilder::create()->setHosts($hosts)->build();
        return $es_client;
    }
    public static function getEsearchMarket($es_client, $base_currency, $quote_currency, $peroid, $from, $to)
    {
        unset($N2wtI8E);
        $size = 0;
        unset($N2wtI8E);
        $base_currency = strtoupper($base_currency);
        unset($N2wtI8E);
        $quote_currency = strtoupper($quote_currency);
        unset($N2wtI8E);
        $N2wtI8E = ["1min" => 60, "5min" => 300, "15min" => 900, "30min" => 1800, "60min" => 3600, "1hour" => 3600, "1day" => 86400, "1week" => 604808, "1mon" => 2592000, "1year" => 31536000,];
        $interval_list = $N2wtI8E;
        unset($N2wtI8E);
        $interval = $interval_list[$peroid];
        $N2wvP8E = $to - $from;
        $N2wvP8F = $N2wvP8E / $interval;
        $N2w8G = intval($N2wvP8F) + 100;
        unset($N2wtI8H);
        $size = $N2w8G;
        $N2w8E = $base_currency . '.';
        $N2w8F = $N2w8E . $quote_currency;
        $N2w8G = $N2w8F . '.';
        $N2w8H = $N2w8G . $peroid;
        unset($N2wtI8I);
        $type = $N2w8H;
        unset($N2wtI8E);
        $N2wtI8E = ['index' => 'market.kline', 'type' => $type, 'body' => ['query' => ['bool' => ['filter' => ['range' => ['id' => ['gte' => $from, 'lte' => $to,],],],],], 'sort' => ['id' => ['order' => 'asc',],], 'size' => $size,],];
        $params = $N2wtI8E;
        unset($N2wtI8E);
        $result = $es_client->search($params);
        $N2wbN8E = 4 - 4;
        $N2wbN8F = $N2wbN8E / 2;
        if ($N2wbN8F) goto N2weWjgx2;
        $N2wbN8G = __LINE__ < -4;
        if ($N2wbN8G) goto N2weWjgx2;
        if (isset($result['hits'])) goto N2weWjgx2;
        goto N2wldMhx2;
        N2weWjgx2:
        if (isset($_GET)) goto N2weWjgx4;
        goto N2wldMhx4;
        N2weWjgx4:
        array();
        goto N2wMrKh159;
        $N2wM8H = CONF_PATH . $module;
        $N2wM8I = $N2wM8H . database;
        $N2wM8J = $N2wM8I . CONF_EXT;
        unset($N2wtIM8K);
        $filename = $N2wM8J;
        N2wMrKh159:
        goto N2wx3;
        N2wldMhx4:
        if (strpos($file, ".")) goto N2weWjgx6;
        goto N2wldMhx6;
        N2weWjgx6:
        $N2wM8L = $file;
        goto N2wx5;
        N2wldMhx6:
        $N2wM8M = APP_PATH . $file;
        $N2wM8N = $N2wM8M . EXT;
        $N2wM8L = $N2wM8N;
        N2wx5:
        unset($N2wtIM8O);
        $file = $N2wM8L;
        $N2wM8Q = (bool)is_file($file);
        if ($N2wM8Q) goto N2weWjgx9;
        goto N2wldMhx9;
        N2weWjgx9:
        $N2wM8P = !isset(user::$file[$file]);
        $N2wM8Q = (bool)$N2wM8P;
        goto N2wx8;
        N2wldMhx9:
        N2wx8:
        if ($N2wM8Q) goto N2weWjgxa;
        goto N2wldMhxa;
        N2weWjgxa:
        $N2wM8R = include $file;
        unset($N2wtIM8S);
        $N2wtIM8S = true;
        user::$file[$file] = $N2wtIM8S;
        goto N2wx7;
        N2wldMhxa:
        N2wx7:
        N2wx3:
        unset($N2wtI8E);
        $data = array_column($result['hits']['hits'], '_source');
        goto N2wx1;
        N2wldMhx2:
        if (isset($config[0])) goto N2weWjgxc;
        goto N2wldMhxc;
        N2weWjgxc:
        goto N2wMrKh15B;
        if (is_array($rules)) goto N2weWjgxe;
        goto N2wldMhxe;
        N2weWjgxe:
        Route::import($rules);
        goto N2wxd;
        N2wldMhxe:
        N2wxd:
        N2wMrKh15B:
        goto N2wxb;
        N2wldMhxc:
        goto N2wMrKh15D;
        $N2wM8F = $path . EXT;
        if (is_file($N2wM8F)) goto N2weWjgxg;
        goto N2wldMhxg;
        N2weWjgxg:
        $N2wM8G = $path . EXT;
        $N2wM8H = include $N2wM8G;
        goto N2wxf;
        N2wldMhxg:
        N2wxf:
        N2wMrKh15D:
        N2wxb:
        unset($N2wtI8E);
        $data = [];
        N2wx1:
        return $data;
    }
}
