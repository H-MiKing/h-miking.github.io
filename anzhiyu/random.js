var posts=["2022/07/21/Centos 基本命令/","2022/07/21/DHCP服务/","2023/10/10/Centos7 编译安装Nginx/","2023/10/10/04741 计算机网络原理(自考)/","2023/10/10/Docker安装部署/","2022/07/21/Debian10的网络配置/","2023/10/10/Keepalived+Nginx双机热备实验/","2022/07/21/NFS配置/","2022/07/21/Samba服务配置/","2023/02/12/Shebang/","2023/10/10/Nginx主配置文件中文注释/","2023/02/12/Shell内置命令、外置命令/","2022/07/21/Squid代理服务/","2016/03/30/hello-world/","2023/02/12/什么是shell脚本/","2023/02/12/执行shell脚本的方式/","2022/07/21/磁盘管理/","2023/02/12/环境变量的设置/","2023/02/12/脚本语言/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};