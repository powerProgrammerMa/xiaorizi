

var initState = {

    touxiang:"touxiangno",
    usernames:"",
    imgList:[],
    shangquan:[],
    homecontent:[],
    minsujingping:[],
    minsuxingqu:[],
    minsulinggan:[],
    bangdancdtop3:[],
    bangdanqgtop3:[],
    bangdansort:[],
    shangquanqb:[],
    minsufuwu:"no",
    minsufuwujt:"icon-icon1",
    minsujpdetail:null,
    bangdancdtop10:[],
    bangdanqgtop10:[],
    minsuxinqudetail:null,
    hearts:"",
    myheart:[],
    homefj:[],
    homejx:[],
    homegp:[],
    homejxdetail:null,
    titleList:[
        {path:"jinping",txt:"精品民宿",icon:"icon-minsuzhongchou-xuanzhongzhuangtai"},
        {path:"xinqu",txt:"兴趣培养",icon:"icon-xingquaihao"},
        {path:"linggan",txt:"灵感空间",icon:"icon-linggan2"},
        
    ],
    swiperid:0,
    mySwiper:""
    
    }


    export default (state=initState,action)=>{
        switch(action.type){

            case "change_touxiang":
            state.touxiang=action.name;
            return Object.assign({},state);
            break;


            case "get_username":
            var [a] =action.json
            state.usernames=a.username;
            return Object.assign({},state);
            break;

            case "get_homebanner":
            state.imgList=action.json;
            return Object.assign({},state);
            break;

            
            case "get_homeshangquan":
            state.shangquan=action.json;
            return Object.assign({},state);
            break;
           

            case "get_homecontent":
            state.homecontent=action.json;
           
            return Object.assign({},state);
            break;

            case "get_minsujingping":
            state.minsujingping=action.json;
           
            return Object.assign({},state);
            break;


            case "get_minsuxingqu":
            state.minsuxingqu=action.json;
           
            return Object.assign({},state);
            break;

            case "get_minsulinggan":
            state.minsulinggan=action.json;
            return Object.assign({},state);
            break;


            case "get_bangdancdtop3":
            state.bangdancdtop3=action.json;
            
            return Object.assign({},state);
            break;

            case "get_bangdanqgtop3":
            state.bangdanqgtop3=action.json;
            
            return Object.assign({},state);
            break;

          

            case "get_bangdansort":
            state.bangdansort=action.json;
            
            return Object.assign({},state);
            break;

            

            case "get_shangquanqb":
            state.shangquanqb=action.json;
          
            return Object.assign({},state);
            break;


            case "changeminsufuwu":
            state.minsufuwu=action.name;
           
            return Object.assign({},state);
            break;

            
            case "changeminsufuwujt":
            state.minsufuwujt=action.name;
           
            return Object.assign({},state);
            break;

            

            case "get_bangdancdtop10":
            state.bangdancdtop10=action.json;
           
            return Object.assign({},state);
            break;



            

            case "get_bangdanqgtop10":
            state.bangdanqgtop10=action.json;
           
            return Object.assign({},state);
            break;


            
            case "get_minsuxinqudetail":
            state.minsuxinqudetail=action.json;
            
            return Object.assign({},state);
            break;

            

            case "get_myheart":
            state.myheart=action.json;
          
            return Object.assign({},state);
            break;



           

            case "get_minsujpdetail":
            state.minsujpdetail=action.json;
            
            return Object.assign({},state);
            break;

            case "get_homefj":
            state.homefj=action.json;
           
            return Object.assign({},state);
            break;


            case "get_homejx":
            state.homejx=action.json;
            
            return Object.assign({},state);
            break;


            case "get_homegp":
            state.homegp=action.json;
          
            return Object.assign({},state);
            break;

            

            case "get_homejxdetail":
            state.homejxdetail=action.json;
           
            return Object.assign({},state);
            break;











            
    
            
            default:
            return Object.assign({},state);
            break;
        }
    }
        
    