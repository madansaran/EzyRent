import React, { Component } from "react";
import { StyleSheet,StatusBar,ScrollView,TouchableOpacity, View,Image, Text, ImageBackground, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationService from '../../navigation/NavigationService';
import SampleData from '../../config/sample-data';
import { ThemeContext, theme } from '../../theme';
import styles from './style';
import {
  NAVIGATION_ADD_PROPERTIES_TENANTS_VIEW_PATH,
  NAVIGATION_DETAIL_PROPERTIES_TENANTS_VIEW_PATH,
  NAVIGATION_RENT_TRANSACTION_DETAIL_VIEW_PATH,
  NAVIGATION_DETAIL_PROPERTIES_DETAIL_VIEW_PATH,
} from '../../navigation/routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EzyRent } from '../../ezyrent';
import {  getNotifications } from '../../actions';

 
class NotificationList extends React.Component {
  static contextType = ThemeContext;
  constructor(props){
    super();
    this.state={
      notifications:[],
    }
    StatusBar.setBarStyle('dark-content');
  }
  UNSAFE_componentWillMount(){
    const {customer,status,getNotifications}=this.props
    const properties = SampleData.getPropeties() || [];
    this.setState({payingRent:properties,collectingRent:properties})
    console.log("current customer =>",customer.user_type)
    if(status){
      if(customer.hasOwnProperty("user_type")){
        if(customer.user_type){
          this.setState({AccountType:customer.user_type});
        } else{
          this.setState({AccountType:'U'});
        }
      } else{
        this.setState({AccountType:"U"});
      }
    } else{
      this.setState({AccountType:"U"});
    }
    getNotifications();

  }


  goToTargetScreen(item){
    console.log("now it",item)
    if(item.status=="paid"){
      this.goToTransactionDetail(item);
    } else {
      this.goToPropertyDetail(item);
    }
  }
  goToPropertyDetail(){
    NavigationService.navigate(NAVIGATION_DETAIL_PROPERTIES_DETAIL_VIEW_PATH)
  }

  addPropertyTenant(){
    NavigationService.navigate(NAVIGATION_ADD_PROPERTIES_TENANTS_VIEW_PATH);
  }

  getMoneyFormat(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };
  ProPertyDetailPage(){
    NavigationService.navigate(NAVIGATION_DETAIL_PROPERTIES_TENANTS_VIEW_PATH);
  }
  /* *
  * name getDateFormat
  * @params String
  * @return String
  */
  getDateFormat(str){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const unixTimeZero = Date.parse(str);
    const date = new Date(unixTimeZero);
    const dt = date.getDate();
    const fmt = monthNames[date.getMonth()]
    const fly = date.getFullYear();
    const fdt = dt < 10 ? '0' + dt : '' + dt;
    const dyprd = date.getHours() >= 12 ? 'PM' : 'AM';
     return fdt+ ' '+fmt +' '+fly+', '+date.getHours()+':'+date.getMinutes()+ ' '+dyprd;
  }
  goToTransactionDetail(item){
    NavigationService.navigate(NAVIGATION_RENT_TRANSACTION_DETAIL_VIEW_PATH,{item});
  }
  renderHeader(){
    return(
      <View style={styles.headWrapp}>
        <View style={styles.headcontainer}>
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={theme.typography.title}>
            Notifications
            </Text>
          </View>
          <TouchableOpacity style={styles.iconButton} onPress={()=>{}}>
            <Image style={styles.headerIcon} resizeMode={'contain'} source={require('../../assets/images/navigation.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render(){
    const theme = this.context;
    const {items}=this.props; 
    console.log("items goes here",JSON.stringify(items))
      return (
          <SafeAreaView style={styles.container(theme)}>
            {this.renderHeader()}
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  >
                {this.renderNotifications()}
              </ScrollView>

          </SafeAreaView>
      );
  }


  renderNotifications(){
    return(
      <View style={styles.properties(theme)}>
        {this.renderPayingItems()}
      </View>
    )
  }
 
  renderPayingItems(){
    const {items} = this.props  
    if(!items.length){
      return(<Text style={{textAlign:'center'}}>Notifications Not Available</Text>)
    }
      return items.map((item,inx)=>{
      if(item.type=="paid"){
        return (
          <TouchableOpacity onPress={()=>this.goToTransactionDetail(item)} key={inx} style={styles.loopitemAct}>
            <ImageBackground imageStyle={styles.loopitembg} style={[styles.loopitembg,styles.loopitembg2]} resizeMode={'cover'} source={this.fasterImageRender(item)}>
              <ImageBackground imageStyle={styles.loopitembg} style={styles.loopitembg} resizeMode={'stretch'} source={require('../../assets/images/properties_item_bg_light.png')}>
                <Image style={styles.tickIcon} resizeMode={'contain'} source={require("../../assets/images/double_tick.png")}></Image>
                 <Text style={styles.itemNameAct(theme)}>{item.module_data.house_number}</Text>
                 <View style={styles.propertygnInfo}>
                    <View style={styles.propInforowleft}>
                      {item.status=="due" &&
                      <Image style={styles.due_label} source={require("../../assets/images/dues_label.png")}></Image>}
                    </View>

                    <View style={styles.propInforowright}>

                      <View style={styles.propInfoAttrb}> 
                        {item.status=="due"?  
                         <Text style={styles.propItemattrvalueError(theme)}>Rent of <Text style={{fontWeight:'bold', color:theme.colors.errorColor}}>INR 15,000</Text> for this property is now due</Text>  
                        : 
                          <Text style={styles.propItemattrvalue(theme)}>You had paid rent of <Text style={{fontWeight:'bold', color:theme.colors.primaryTitleColor}}>INR 15,000</Text> for this property</Text> 
                        } 
                        </View>

                    </View>
                 </View>
                 <Text style={styles.dateFormat(theme)}> {this.getDateFormat(item.paying_date)}</Text>
              </ImageBackground>

            </ImageBackground>
          </TouchableOpacity>
        )

      }
        return (
          <TouchableOpacity onPress={()=>this.goToTargetScreen(item)} key={inx} style={styles.loopitem}>
                 <Text style={styles.itemName(theme)}>{item.module_data[0].house_number} {'\n'}{item.module_data[0].building_name}</Text>
                 <View style={styles.propertygnInfo}>


                    <View style={styles.propInforowright}>  
    
                        <View style={styles.propInfoAttrb}> 
                        {item.status=="due"?  
                         <Text style={styles.propItemattrvalueError(theme)}>Rent of <Text style={{fontWeight:'bold', color:theme.colors.errorColor}}>INR 15,000</Text> for this property is now due</Text>  
                        : 
                          <Text style={styles.propItemattrvalue(theme)}>You have received rent of <Text style={{fontWeight:'bold', color:theme.colors.primary}}>INR 15,000</Text> for this property</Text>  
                        } 
                        </View> 
    
                      </View> 
                   </View>  
                   <Text style={styles.dateFormat(theme)}> {this.getDateFormat(item.notification_date)}</Text>
          </TouchableOpacity>
        )
    })
  }

  fasterImageRender(item){
    //console.log("loop itm in side fasterImageRender",item.image)
    if(!item.image || item.image==null || item.image==''){
      return {uri:'${EzyRent.getMediaUrl()}${item.module_data[0].property_image}'}; 
      } 
      return require('../../assets/images/sample/sample_image_1.png');
  }

}
NotificationList.navigationOptions = ({ navigation }) => ({
  headerStyle: {height:0},
  title: 'Rent',
})



const mapStateToProps = ({ account,notification}) => {
  const { customer } = account;
  const {items,loading} = notification;
  return { items,loading,customer };
};

NotificationList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType(PropTypes.string, null),
  success: PropTypes.oneOfType(PropTypes.string, null),
  customer:PropTypes.oneOfType(PropTypes.object,null),
  getNotifications: PropTypes.func.isRequired,
  landlord_items: PropTypes.object,
};

NotificationList.defaultProps = {
  error: null,
  success: null,
  loading: false,
  customer:null,
  items:[],
};

export default connect(mapStateToProps, {getNotifications})(NotificationList);