import API from '../utils/api';
import Http from '../utils/Http';


export default ({
    namespaced:true,
    state: {
        img:"",
        code:'',
        isLogin:0,
        username:"",
        isCodeRight:false,
        isRegiester:false
    },
    getters:{
    },
    mutations: {
        upLoadImg(state,value){
            state.img = value;
        }
    },
    actions: {
        async sendCode(content,value){
            console.log(value);
            const result = await Http.request('GET',API.SEND_CODE_API,{tel:value});
            console.log(result);
        },
        async logAction(content,value){
            console.log(value);
            const result = await Http.request('POST',API.lOGIN_API,value);
            console.log(result);
            
            content.state.code = result.data.code;
            if(result.data.code==0){
                content.state.isCodeRight = true;
            }else{
                content.state.isCodeRight = false;

            }
        },
        async logOutAction(content){
            const result = await Http.request('GET',API.lOGOUT_API);
            console.log(result);
            content.state.isLogin=0;
        },

        async regiesterAction(content,value){
            const result = await Http.request('POST',API.REGIESTER_API,value);
            console.log(result);
            if(result.data.code==0){
                content.state.isRegiester = true;
            }else{
                content.state.isRegiester = false;
            }
        }
        
    },
    modules: {
    }
  })
  