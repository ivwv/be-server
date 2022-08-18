> 将你的本地文件映射为静态资源

### 安装

```sh
npm install -g be-server
```

### 启动

```sh
be-server path [port]
```

#### path:必须

- 相对路径
- 需要哪个文件夹的内容添加为静态资源，就在那一路径下使用命令
- 例如`./`
- 光输入`be-server`不会启动服务

#### port:可选

- 默认`1234`

### 案例

```sh
be-server ./public 3000
```

> 表示将当前目录下`public`下的文件，映射为静态资源