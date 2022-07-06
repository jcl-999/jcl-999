//LoginView-----定义的数据
export interface LoginFoemInt {
    password:string,
    username:string
}
export class LoginData {
    ruleForm:LoginFoemInt = {
        password:'',
        username:''
    }
}
//ProductView -----商品相详情页面定义的数据
export interface ListInt{
    userId:number,
    id:number,
    title:string,
    productPetails:string
}
interface selectData{
    title:string,
    id:string,
    page:number,
    count:number,
    size:number
}
export class IntiData{
    selectData:selectData={
        title:'',
        id:'',
        count:0,
        page:1,
        size:10
    }
    ListIntiData:ListInt[]=[]
}