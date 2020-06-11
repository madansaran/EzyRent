import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import { isIphoneX} from '../../../components';
import { normalize } from "../../../components";
export default StyleSheet.create({
  container: theme => ({
    flex: 1,
  }),
  headerContainer:theme=>({
    height:theme.dimens.headerWithBannerHeight,
    width:'100%',
  }),

  headerContext:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignContent:'center',
    alignItems:'flex-start',
    padding:theme.spacing.large,
    //marginVertical:10,
    //marginHorizontal:20,
    marginTop:35,
  },
  backscreen:{
    width:30,
    height:17,
    marginTop:isIphoneX()?-20:-5,
  },
  gpsWrapp:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:-20,
  },
  gpsTitle:theme=>({
    color:theme.colors.primary,
    fontSize:normalize(16),
    fontFamily:theme.typography.secondaryFont,
    fontWeight: theme.typography.fontWeightRegular,

  }),
  detailContainer:{
    flexDirection:'column',
    width:'100%',
    backgroundColor:theme.colors.primBackgroundColor,
    minHeight:theme.dimens.containerHeightWithBannerHeader,
    height:theme.dimens.containerHeightWithBannerHeader,
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    paddingTop:20,
  },
  gpscontainer: theme=>({
    backgroundColor:theme.colors.primary,
    height:50,
    width:50,
    alignSelf:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:50,
    padding:10,
  }),
  gpsIcon:{
    width:30,
    height:30,
    alignItems:'center',
  },
  infoContainer:{
    width:'100%',
    alignSelf:'center',
    paddingHorizontal:20,
    flexDirection:'column',
  },
  pageTitle: theme =>({
    color:theme.colors.secondry,
    fontSize:normalize(19),
    fontFamily:theme.typography.fontFamilyMontserratSemi,
  }),
  payTime: theme =>({
    color:theme.colors.underQuickStats,
    fontSize:normalize(12),
    fontFamily:theme.typography.fontFamilyOxygenBold,
    fontWeight: theme.typography.fontWeightBold,
  }),
  payTimebld: theme =>({
    color:theme.colors.underQuickStats,
    fontSize:normalize(12),
    fontFamily:theme.typography.fontFamilyOxygenBold,
  }),
  ownerInfo:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  locationWrapp:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:5,
    fontFamily:theme.typography.secondaryFont,
  },
  textLabel:theme=>({
    color:theme.colors.labelColor,
    fontSize:normalize(13),
    fontFamily:theme.typography.secondaryFont,
    fontWeight: theme.typography.fontWeight,
  }),
  textLabel2:theme=>({
    color:'#6c6c6c',
    fontSize:normalize(11),
    paddingTop:4,
  }),
  propertyInfo:theme =>({
    width:'100%',
    marginTop:20,
    borderBottomWidth:0.7,
    borderColor:theme.colors.lightBorder,
    paddingBottom:theme.spacing.extraLarge,
  }),
  paymentInfo:theme =>({
    width:'100%',
    marginTop:20,
    borderBottomWidth:0.7,
    borderColor:theme.colors.lightBorder,
    paddingBottom:theme.spacing.extraLarge,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  }),
  payamountPeriod:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  textValue:theme=>({
    color:theme.colors.primaryTitleColor,
    fontSize:normalize(16),
    fontFamily:theme.typography.fontFamilyOxygenBold,
    fontWeight: theme.typography.fontWeightSemiBold,
    marginHorizontal:5,
  }),

  primaryBtn:theme=>({
    backgroundColor:theme.colors.primary,
    padding:10,
    borderRadius:25,
  }),
  primaryBtnText:theme=>({
    color:theme.colors.primBtnTextColor,
    fontSize:normalize(15),
    fontFamily:theme.typography.fontFamilyOxygenBold,
    fontWeight: theme.typography.fontWeightSemiBold,
    marginHorizontal:5,
  }),
  banktitle:theme=>({
    color:'#6e6e6e',
    fontSize:normalize(14),
    fontFamily:theme.typography.secondaryFont,
    fontWeight: theme.typography.fontWeightRegular,
  }),
  bankacInfoXl:{
    width:'60%'
  },
  bankacInfo:{
    width:'37%',
    textAlign:'left',
  },
  textLabelXl: theme =>({
    color:theme.colors.primaryTitleColor,
    fontSize:normalize(15),
    fontFamily:theme.typography.fontFamilyOxygenBold,    
  }),

  });
