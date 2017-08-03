# 自定义tap事件

若想看代码demo请戳[这里](https://demo.alkalixin.cn/tap/)(请于移动端上测试)

### px2rem的使用：
根据设计稿的不同更改html的font-size

```
	div{
		@include px2rem(width, 16);
		@include px2rem(height, 16);
		@include px2rem(margin, 10, 20, 30, 40);
		background-color: black;
	}	
```
### 关于flexible：

flexible.js的实质就是通过js动态改写meta标签。

把flexible.js放在所有资源前加载（head标签里）
