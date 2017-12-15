
import axios from "axios";
axios.defaults.baseURL="http://60.205.215.60:7776";

export function change_touxiang(name){
    console.log(name)
    return{
        type:"change_touxiang",
        name
    }
}


export function get_username(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_username",json})
    })

}



export function get_homebanner(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homebanner",json})
    })

}


export function get_homeshangquan(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homeshangquan",json})
    })

}


export function get_homecontent(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homecontent",json})
    })

}



export function get_minsujingping(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_minsujingping",json})
    })

}




export function get_minsuxingqu(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_minsuxingqu",json})
    })

}



export function get_minsulinggan(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_minsulinggan",json})
    })

}


export function get_bangdancdtop3(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_bangdancdtop3",json})
    })

}


export function get_bangdanqgtop3(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_bangdanqgtop3",json})
    })

}


export function get_bangdansort(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_bangdansort",json})
    })

}


export function get_shangquanqb(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_shangquanqb",json})
    })

}

export function changeminsufuwu(name){
    console.log(name)
    return{
        type:"changeminsufuwu",
        name
    }
}

export function changeminsufuwujt(name){
    console.log(name)
    return{
        type:"changeminsufuwujt",
        name
    }
}




export function get_minsujpdetail(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_minsujpdetail",json})
    })

}


export function get_bangdancdtop10(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_bangdancdtop10",json})
    })

}

export function get_bangdanqgtop10(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_bangdanqgtop10",json})
    })

}


export function get_minsuxinqudetail(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_minsuxinqudetail",json})
    })

}



export function get_myheart(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_myheart",json})
    })

}


export function get_homefj(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homefj",json})
    })

}


export function get_homejx(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homejx",json})
    })

}

export function get_homegp(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homegp",json})
    })

}

export function get_homejxdetail(url,dispatch){
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_homejxdetail",json})
    })

}