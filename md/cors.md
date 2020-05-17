### 触发条件

- 跨域
- 非简单请求

### 简单请求

- （1) 请求方法是以下三种方法之一：
  
  - HEAD
  
  - GET
  
  - POST

- （2）HTTP的头信息不超出以下几种字段：
  
  - Accept
  
  - Accept-Language
  
  - Content-Language
  
  - Last-Event-ID
  
  - Content-Type：只限于三个值application/x-www-form-urlencoded
  
  - multipart/form-data、text/plain

### 跨域请求头

- Access-control-allow-origin
- Access-Control-Allow-Credentials
- Access-Control-Expose-Headers
- Access-Control-Request-Method
- Access-Control-Max-Age 在这个时间内不会重复发options请求
