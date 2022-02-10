# 基于Microsoft Identity Platform 对静态Web应用进行安全控制

## 简介

这是课程《解密和实战Microsoft Identity Platform》的一个范例代码，详情请参考 https://identityplatform.xizhang.com 的第二讲的讲解。用这个方案的好处就是在代码中不需要编写跟身份认证有关的东西，完全交给了托管平台，很容易后期配置调整。


## 内容

1. 用React做的一个最简单的前端项目，可以显示当前用户
1. 用Azure function做的一个最简单的服务，可以在React前端中调用，但不能被其他外部调用

