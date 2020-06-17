import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { normalize } from "../../components";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    titleWrapper:{
      width:'90%',
      alignSelf:'center',
      marginVertical:20,
      flexDirection:'row',
      alignItems:'center',
    },
    backscreen:{
      width:30,
      height:17,
    },
    rectWrapp:{
      backgroundColor:theme.colors.lightBackgrountColor,
      marginTop:normalize(80),
      minHeight:theme.dimens.defaultScreenMinHeight,
    },
    columntitle:theme=>({
      color:theme.colors.descriptionColor,
      fontFamily:theme.typography.fontFamilyOxygenBold,
      fontSize:normalize(16),
      fontWeight:theme.typography.fontWeightBold,
      width:'100%',
      textAlign:'left',
      marginBottom:20,
    }),
    columntitlePop:theme=>({
      color:theme.colors.descriptionColor,
      fontFamily:theme.typography.fontFamilyOxygenBold,
      fontSize:normalize(16),
      fontWeight:theme.typography.fontWeightBold,
      width:'100%',
      textAlign:'left',
      marginBottom:0,
      marginTop:40,
    }),
    columntitlePop1:theme=>({
      marginTop:0,
    }),
    profilebg:{
      alignContent:'center',
      alignItems:'center',
      position:'relative',
      marginLeft: 0,
      height: 124,
      width: 124,
      borderRadius: 60,
      borderWidth: 2,
      borderBottomColor:'#9eda90',
      borderLeftColor:'#9eda90',
      borderRightColor:'#9eda90',
      borderTopColor:'#8cc3fc',
    },
    profilePik:{
      height: 120,
      width: 120,
      borderRadius: 60,
    },
    profileEdit:{position:'absolute',top:10,width:40,height:40,alignItems:'center',},
    profileRemove:{position:'absolute',bottom:10,width:40,height:40,borderRadius:20,alignItems:'center',},
    editIcon: {
      //tintColor: "#315ad6",
      resizeMode: "cover",
      height: 40,
      width: 40,
    },
    removeIcon:{
      //tintColor: "#315ad6",
      resizeMode: "cover",
      height: 40,
      width: 40,
    },
    formcolumn:{
      flexDirection: "column",
      width:'100%',
      alignItems: "center",
      justifyContent: "center",
    },
    fieldWrapp:{
      width:'100%',
      marginTop:20,
      borderWidth:1,
      borderColor:'transparent',
    },
    textInputStyle:theme=>({
      width:'100%',
      borderColor:theme.colors.secondry,
      borderBottomWidth:1,
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:normalize(16),
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:theme.spacing.small,
    }),
    textInputStyleSec:theme=>({
      width:'100%',
      borderColor:theme.colors.lightBorder,
      borderBottomWidth:1,
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:normalize(16),
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:theme.spacing.small,
      padding:0,
      paddingBottom:4,
    }),
    pinwrapper: theme =>({
      flexDirection:'column',
      width:'100%',
      alignSelf:'center',
    }),
    pintitle: theme =>({
      fontFamily:theme.typography.primaryFont,
      fontWeight:theme.typography.fontWeightRegular,
      fontSize:normalize(16),
      color:theme.colors.descriptionColor,
    }),
    pincontainer: theme => ({
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      position:'relative',
    }),
    pininputBox: theme =>({
      height:40,
      width:'100%',
      alignSelf:'center',
    }),
    pininputBoxPop: theme =>({
      height:20,
      width:'100%',
      alignSelf:'center',
    }),
    underlineStyleHighLighted: theme => ({
      borderColor: theme.colors.secondry,
      padding:0,
    }),
    underlineStyleBase: theme => ({
      width: theme.dimens.defaultPinCodeWidth,
      height: 45,
      padding:0,
      borderWidth: 0,
      borderBottomWidth: 1,
      color:theme.colors.descriptionColor,
      borderColor:theme.colors.descriptionColor,
      fontSize:normalize(22),
        fontFamily:theme.typography.primaryFont,
      fontWeight:theme.typography.fontWeightRegular,
    }),
    visibilityIconWrapp:{
      position:'absolute',
      right:0,
      top:0,
    },
    visibilityIcon:{
      width:25,
      height:20,
    },
    fielcountrylabel: theme =>({
      flexDirection:'row',
      justifyContent:'space-between',
      width:'35%',
      alignItems:'center',
      borderBottomWidth:1,
      borderColor:theme.colors.lightBorder,
    }),
    fieltext:theme=>({
      color:theme.colors.primaryTitleColor,
      fontFamily:theme.typography.secondryFont,
      fontSize:normalize(16),
      fontWeight:theme.typography.fontWeightRegular,
      marginTop:2,
      paddingBottom:2,
    }),
    rectView:theme=>({
      marginBottom:50,
    }),
    downarrowicon:{
      width:14,
      height:14,
      marginTop:10,
    },
    contactbook:theme=>({
      width:'62%',
      borderColor:theme.colors.lightBorder,
    }),
    twocolumn:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    spacingProvide:{
      width:'100%',
      height:70,
      zIndex:1
    },
    addBtncontainer:theme=>({
      position: 'absolute',
      flex: 1,
      left: 0,
      right: 0,
      bottom: 0,
      width:'100%',
      backgroundColor:theme.colors.secondry,
      alignItems:'center',
      justifyContent:'center',
      height:50,
    }),
    addBtncaption:theme =>({
      //borderBottomWidth:1,
      color:theme.colors.primBtnTextColor,
      fontFamily:theme.typography.primaryFont,
      fontSize:normalize(22),
      fontWeight:theme.typography.fontWeightSemiBold,
      textTransform:'uppercase',
    }),
    dscribe:theme =>({
      //borderBottomWidth:1,
      color:theme.colors.descriptionColor,
      fontFamily:theme.typography.secondaryFont,
      fontSize:normalize(12),
      fontWeight:theme.typography.fontWeightRegular,
      lineHeight:normalize(20),
    }),
    fieldWrappLast:{
      marginBottom:20,
    },
    // popup design 
    popupContainer: theme=>({
      width:'100%',
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 5,
      borderColor: "#e6e6e6",
      borderWidth: 1,
      shadowOffset: {
        height: 5,
        width: 5
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.35,
      paddingVertical:20,
      paddingHorizontal:10,
    }),
    pop_wrap:{
      //backgroundColor:'#fff',
    },
    popupBtms:{
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      paddingTop:40,
    },
    cancel:{
      color:'#6c6c6c',
    },

  });
