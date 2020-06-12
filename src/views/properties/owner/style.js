import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import { normalize } from "../../../components";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    rectviewcustom:{
      paddingTop:0,
      marginTop:80,
      paddingBottom:40,
    },
    titleWrapper:{
      width:'90%',
      alignSelf:'center',
      marginVertical:20,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:10,
    },
    back_button:{
      width:30,
      height:17,
    },
    three_dots:{
      width:6,
      height:23,
      marginTop:-6,
    },
    editButton:{
      width:20,
      height:20,
    },
    profile_wrap:{
      marginTop:-75,
      marginLeft:'auto',
      marginRight:'auto',
      borderWidth: 2,
      borderBottomColor:'#9eda90',
      borderLeftColor:'#9eda90',
      borderRightColor:'#9eda90',
      borderTopColor:'#8cc3fc',
      borderRadius:75,
    },
    profile:{
      width:150,
      height:150,
      borderRadius:75,
    },
    detail:{
      flexDirection:'row',
      justifyContent:'center',
    },
    detailHeading:theme=>({
      fontSize:normalize(20),
      color:'#315add',
      textAlign:'center',
      marginTop:10,
      textTransform:'uppercase',
      fontFamily:theme.typography.fontFamilyMontserratSemi,
      fontWeight:theme.typography.fontWeightSemiBold,
      marginBottom:5,
    }),
    detail_inner:{
      fontSize:normalize(16),
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      alignContent:'center',
      fontFamily:theme.typography.secondaryFont,
      fontWeight:theme.typography.fontWeightRegular,
    },
    gps_dark_icon:{
      width:16,
      height:16,
    },
    shadow:{
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: 16,
      paddingLeft: 16,
      elevation: 5,
      minWidth: 88,
      borderRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      },
      shadowColor: "#466ae0",
      shadowOpacity: 0.35,
      shadowRadius: 5,
      borderRadius: 10,
      marginVertical:10,
      width:'98%',
      alignSelf:'center',
    },
    slider:{
      overflow:'visible',
    },
    slider1:{
      overflow:'visible',
      marginTop:10,
    },
    quick_stats:{
      width:'100%',
      //height:130,
      flexDirection:'row',
      padding:15,
      flexWrap:'wrap',
      overflow:'hidden',
      borderRadius: 10,
    },
    quick_stats_heading:{
      color:theme.colors.propertyHeading,
      fontSize:normalize(18),
      fontFamily:theme.typography.fontFamilyMontserratSemi,
      fontWeight:theme.typography.fontWeightSemiBold,
    },
    content:theme=>({
      color:theme.colors.descriptionColor,
      fontSize:normalize(14),
      paddingBottom:10,
      paddingTop:10,
      fontFamily:theme.typography.secondaryFont,
      fontWeight:theme.typography.fontWeightRegular,
      lineHeight:20,
    }),
    quick_stats_inner:{
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between',
    },
    paginat:{
      width:40,
      height:10,
    },
    two_box:{
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between',
    },
    box:{
      textAlign:'center',
      paddingHorizontal:10,
      width:'33%',
      minHeight:70,
    },
    box_heading:{
      width:'100%',
      textAlign:'center',
      color:'#315add',
      fontSize:normalize(24),
      fontFamily:theme.typography.fontFamilyOxygenLight,
      fontWeight:theme.typography.fontWeightRegular,
    },
    box_desc:{
      width:'100%',
      textAlign:'center',
      color:'#333',
      fontSize:normalize(12),
      fontFamily:theme.typography.secondaryFont,
      fontWeight:theme.typography.fontWeightRegular,
    },
    green_box:{
      justifyContent:'center',
      flexDirection:'column',
      width:'100%',
    },
    grenBox:{
      width:'100%',
      height:8,
      marginVertical:10,
      resizeMode: 'stretch',
    },
    greenText:{
      textAlign:'center',
      color:'#44b21b',
      fontSize:normalize(14),
    },
    greenText100:{
      fontSize:normalize(20),
    },

  });
