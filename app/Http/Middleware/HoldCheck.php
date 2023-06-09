<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Api\Controller;
use Closure;
use App\Users;
use App\LeverTransaction;

class HoldCheck extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user_id = Users::getUserId();
        $exist_close_trade = LeverTransaction::where('user_id', $user_id)->whereNotIn('status', [LeverTransaction::CLOSED, LeverTransaction::CANCEL])->count();
        if ($exist_close_trade > 0) {
            // return response()->json([
            //     'type' => 'error',
            //     'message' => '您有未平仓的交易,操作禁止'
            // ]);
            return $this->error('您有未平仓的交易,操作禁止');
        }
        return $next($request);
    }
}
