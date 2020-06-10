import React, { Component } from "react";
import { TouchableOpacity, View, Image, ImageBackground, Text,SafeAreaView, ScrollView,ActivityIndicator } from "react-native";
import Svg, { Path } from "react-native-svg";
import NavigationService from '../../../navigation/NavigationService';
import Timeline from 'react-native-timeline-flatlist'
import styles from './style';
import { ThemeContext, theme } from '../../../theme';
import {
    NAVIGATION_DETAIL_PROPERTIES_OWNER_VIEW_PATH,
    NAVIGATION_MORE_TRANSACTION_SUCCESS_VIEW_PATH,
  } from '../../../navigation/routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPropertyById } from '../../../actions';
    
class ViewPropertyTenant extends React.Component {
    static contextType = ThemeContext;
    constructor(props){
      super();
    }
    UNSAFE_componentWillMount(){
        const {navigation,getPropertyById} = this.props
        const currentProperty = navigation.getParam("property");
        console.log("currentProperty UNSAFE_componentWillMount",currentProperty)
        getPropertyById(currentProperty.id);
    }
    goToPropertyOwnerDetail(landlord_id){
        NavigationService.navigate(NAVIGATION_DETAIL_PROPERTIES_OWNER_VIEW_PATH,{landlord_id})
    }

    renderHeader(theme){
        return(
          <View style={styles.headerContainer(theme)}>
            <View style={styles.headerContext}>
              <TouchableOpacity onPress={()=>NavigationService.goBack()} style={styles.backscreen}>
                <Image style={styles.backscreen} resizeMode={'stretch'} source={require('../../../assets/images/back-white.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        )
    }
    renderInfoTimeline(value){
        return(
            <Text style={styles.payTime(theme)}>You paid rent of <Text style={{color:theme.colors.primaryTitleColor,fontWeight:'bold'}}>INR 25000</Text> for this property</Text>
        )
    }
    PayRent(){
        NavigationService.navigate(NAVIGATION_MORE_TRANSACTION_SUCCESS_VIEW_PATH)
      }
    render(){
        const theme = this.context;
        const {property_loading,property_currentItem} = this.props;
        if(property_loading || !Object.keys(property_currentItem).length){
            return (<View style={{alignSelf:'center',justifyContent:'center',width:'100%',height:'100%'}}><ActivityIndicator color={'#315ADD'} size={'large'} /></View>)
          }
        return (
            <ImageBackground style={{width:'100%',height:'100%'}} resizeMode={'repeat'} imageStyle={{width:'100%',}} source={require('../../../assets/images/property_view_bg.png')}>
                <SafeAreaView style={styles.container(theme)}>
                    <View>
                    {this.renderHeader(theme)}
                    <View style={styles.detailContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.infoContainer}>
                                <View style={styles.propertyInfo(theme)}>
                                    <Text style={styles.pageTitle(theme)}>{property_currentItem.house_number}</Text>
                                    <Text style={styles.pageTitle(theme)}>{property_currentItem.building_name}</Text>
                                    <View style={styles.ownerInfo}>
                                        <Text style={styles.textLabel(theme)}>{property_currentItem.tenant_text}</Text>
                                         <TouchableOpacity onPress={()=>this.goToPropertyOwnerDetail(property_currentItem.tenant_id)}><Text style={styles.textValue(theme)}>{property_currentItem.landlord_details[0].landlord_name}</Text></TouchableOpacity>
                                    </View>
                                    <View style={styles.locationWrapp}>
                                        <Image resizeMode={'contain'} style={{width:20,height:20,marginRight:5,marginLeft:-5}} source={require('../../../assets/images/gps_dark.png')}></Image>
                                        <Text style={styles.textLabel(theme)}>
                                            {property_currentItem.location}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.paymentInfo(theme)}>
                                    <View>
                                        <View style={styles.payamountPeriod}>
                                            <Text style={styles.pageTitle(theme)}>INR 25,0000</Text>
                                            <Text style={[styles.textLabel(theme),styles.textLabel2(theme),{color:'#878787',paddingTop:5,}]}> Per month</Text>
                                        </View>
                                        <Text style={styles.payTimebld(theme)}>{property_currentItem.rent_due_text} {/*01 March 2020*/} {property_currentItem.rent_next_day_date}</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.PayRent()} style={styles.primaryBtn(theme)}>
                                        <Text style={styles.primaryBtnText(theme)}>PAY NOW</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.paymentInfo(theme)}>
                                    <View style={styles.bankacInfoXl}>
                                        <Text style={styles.banktitle(theme)}>Bank Details</Text>
                                        <Text style={styles.textLabelXl(theme)}>{property_currentItem.bank_name} {property_currentItem.bank_account_number}</Text>
                                        <Text style={styles.textLabelXl(theme)}>{property_currentItem.bank_additional_details}</Text>
                                    </View>
                                    <View style={styles.bankacInfo}>
                                        <Text style={styles.banktitle(theme)}>Previous Dues</Text>
                                        <Text style={styles.textLabelXl(theme)}> None</Text>
                                        <Text style={styles.banktitle(theme)}>(This Year)</Text>
                                    </View>
                                </View>

                                <View style={{height:30,width:'100%'}}></View>
                                <Timeline
                                    showTime={false}
                                    circleSize={20}
                                    circleColor={theme.colors.secondry}
                                    innerCircle={'icon'}
                                    lineColor={theme.colors.secondry}
                                    separatorStyle={{backgroundColor:'transparent',height:5,}}
                                    separator={true}
                                    style={{width:'100%',marginLeft:-10}}
                                    titleStyle={[styles.banktitle(theme),{marginTop:-14,marginLeft:0}]}
                                    descriptionStyle={[styles.payTime(theme),{marginTop:0}]}
                                    data={[
                                        {time: '05:34', title: '15 January 2020, 05:34 PM ', description: this.renderInfoTimeline('You paid rent of INR 25000 for this property'), icon: require('../../../assets/images/step-round.png')},
                                        {time: '07:17', title: '15 December 2019, 07:17 PM ', description: this.renderInfoTimeline('You paid rent of INR 25000 for this property'), icon: require('../../../assets/images/step-round.png')},
                                    ]}
                                />
                                <View style={{height:70,width:'100%'}}></View>
                            </View>
                        </ScrollView>
                    </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}


const mapStateToProps = ({ properties }) => {
    const {property_currentItem,property_loading} = properties
    return { property_currentItem,property_loading };
  };
  
  ViewPropertyTenant.propTypes = {
    getPropertyById: PropTypes.func.isRequired,
    property_currentItem: PropTypes.object,
    property_loading: PropTypes.bool,
  };
  
  ViewPropertyTenant.defaultProps = {
    property_currentItem: {},
    property_loading: false,
  
  };
  
  export default connect(mapStateToProps, {getPropertyById})(ViewPropertyTenant);
  