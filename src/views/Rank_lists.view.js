import React from 'react';
import { ajaxExpanding } from '../libs/ajaxExpand.mini.min.js';
import { config , getImgURL , getScreenSize } from '../libs/public';

class Rank_lists extends React.Component {
  constructor(props) {
    super(props);
    this.isMobile=getScreenSize().width<768;
    this.state={
      datas:[],
      nodata:1
    }
  }
  componentWillMount() {
    var send_data=config.publicData;
    ajaxExpanding.init({
      url: config.host+'/openapi/realtime/recommend',
      data: send_data,
      dataType:'json',
      type:'get',
      async:true,
      handleData:(result)=>JSON.parse(result),
      onSuccess:(result)=>{
        var Ranks=[];
        console.log(result.data)
        result.data.map((e,index)=>{if(index>0) Ranks=Ranks.concat(e.video_list)})
        this.setState({
        nodata:0,
        datas:Ranks
      })}
    }).send();
  }
  words_limit(str) {
    var screenWidth = getScreenSize().width;

    if(screenWidth >= 1180 && str.length>15) {
      return str.substring(0,15)+"...";
    }else if(screenWidth >= 768 && screenWidth < 1180 && str.length > 10){
      return str.substring(0,15)+"...";
    }else if(screenWidth < 768 && str.length>7){
      return str.substring(0,7)+"...";
    }else {
      return str;
    }
  }
  render() {
    if(this.state.nodata) {
      return <div></div>;
    } else {
      if(this.isMobile) {
        return <div id="phone_ranks" className="maxWarp">
            {this.state.datas.map((e,index)=><div className="rank_item" key={index}>
              <img src={getImgURL(e.img)} alt={e.title}/>
              <div className="phone_msg">
                <span className="fontSizeS" title={e.title}>名称：{this.words_limit(e.short_title)}</span>
                <br/>
                <span className="fontSizeS">播放量：{e.play_count_text}</span>
                <br/>
                <span className="fontSizeS">类型：{e.is_vip=='1'?"VIP":"免费"}</span>
              </div>
            </div>)}
          </div>
      } else { //pc
        return <div id="pc_ranks" className="maxWarp">
          {this.state.datas.map((e,index)=><div className="rank_item" key={index}>
            <div>
              {e.is_vip=='1'?<img src="../resource/images/vip.png" className="pc_vip" />:''}
              <img src={getImgURL(e.img)} alt={e.title} className='pc_pic'/>
              <div className="pc_msg" style={{
                width:'5.197rem',
                height:'3.898rem',
                position:'absolute',
                top:'0.15rem',
                background:'rgba(150,150,150,0.6)'
              }}>
                <span>播放量：{e.play_count_text}</span>
              </div>
            </div>
            <span  className="fontSizeS" title={e.title}>{this.words_limit(e.short_title)}</span>
          </div>)}
        </div>
      }
    }
  }
}

module.exports=Rank_lists;
