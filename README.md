92源码网www.92luntan.com

测试环境：
Nginx  MySQL   phpMyAdmin   Redis   PHP7.3   

删除函数、安装扩展 
fileinfo，opcache，redis， imagemagick，imap，exif，intl，xsl，

放行所有端口

批量替换域名 www.demo.com和www.ycoin.test成你的域名

上传文件 导入数据库文件

修改根目录.evn 数据库连接

设置网站运行目录public   伪静态 laravel5

反向代理 
location ~/(wss|socket.io) {
	# 此处改为 socket.io 后端的 ip 和端⼝即可 
	proxy_pass https://127.0.0.1:2000; 
	proxy_set_header Upgrade $http_upgrade; 
                proxy_set_header Connection "upgrade";
	proxy_http_version 1.1;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $host;
 }

安装es 网站根目录运行终端命令执行下列命令
1.yum install java -y

2.安装es 
rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
vi /etc/yum.repos.d/elasticsearch.repo

3.插入下面代码
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md

shift+：  输入wq回车保存 

5.yum install elasticsearch

6安装python3和扩展 
yum install python3 -y 
pip3 install websocket-client redis


启动service elasticsearch start


清理缓存 
php artisan config:cache 



━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━

执行计划任务  


启动workman
cd /www/wwwroot/www.demo.com/public/vendor/webmsgsender
php start.php restart
 

实时k线推送
cd /www/wwwroot/www.demo.com
php artisan websocket:client restart


理财访问URL 
https://www.demo.com/api/lh/interest


期权交易结算  Shell  一分钟  
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
step=1
for (( i = 0; i < 59; i=(i+step) )); do
curl -sS --connect-timeout 10 -m 59 ''https://www.demo.com/api/pingchang''
echo "--------------------------------------------------"
endDate=date +"%Y-%m-%d %H:%M:%S"
echo "[$endDate] 成功"
echo "--------------------------------------------------"
sleep $step
done
exit 0

━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━━┅━┅━┅━┅━┅━┅━┅━┅━━┅


后台   https://www.demo.com/login438
账号密码  admin  123456

代理后台 https://www.demo.com/agent/
账号密码  admin  123456
