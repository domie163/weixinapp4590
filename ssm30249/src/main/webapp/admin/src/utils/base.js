const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm30249/",
            name: "ssm30249",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm30249/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农业电商服务系统"
        } 
    }
}
export default base
