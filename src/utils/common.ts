// import settings from '@/settings'
// // import { UserModule } from "@/store/modules/login";
//
// export const  showImgByUrl = (url: string) => {
//     return `${settings.VUE_APP_BASE_API}api-file/files/showFile?fileUrl=${url}`
// }
//
// export function downloadFile (data,fileName) {
//     if(!data){
//         return ;
//     }
//     let blob = new Blob([data],{type:"application/octet-stream"});
//     if (window.navigator.msSaveOrOpenBlob) {
//         navigator.msSaveBlob(blob, fileName);
//     } else {
//         let link = document.createElement("a");
//         let evt = document.createEvent("HTMLEvents");
//         evt.initEvent("click", false, false);
//         link.href = URL.createObjectURL(blob);
//         link.download = fileName;
//         link.style.display = "none";
//         document.body.appendChild(link);
//         link.click();
//         window.URL.revokeObjectURL(link.href);
//     }
// }
//
// export function compareType(id: number){
//     let userInfo: any = UserModule.userInfo || {}
//     let currentId: number = userInfo.organizationId
//     return currentId == id
// }
//
// export function arrayConversionObj(arr: any[]){
//     arr = arr || []
//     let obj = {}
//     arr.map(item => {
//         obj[item.key] = item.value
//     })
//     return obj
// }
//
// export function strConversionObj(str){
//     if(!!str && typeof str == 'string'){
//         str = JSON.parse(str)
//     }
//     return str
// }
//
// export function conversionSignMap(signMap){
//     signMap = signMap|| []
//     let obj = {}
//     signMap.map(item => {
//         let newKey = `${item.id}${item.value}`
//         obj[item.key] = newKey
//     })
//     return obj
// }
//
// export function conversionParamMap(signMap){
//     signMap = signMap|| []
//     let obj = {}
//     signMap.map(item => {
//         obj[item.key] = item.value
//     })
//     return obj
// }
// export function objConversionSignArr(obj){
//     obj = obj || {}
//     let arr = []
//     for(let x in obj){
//         arr.push({
//             key: x,
//             value:obj[x],
//             id: null,
//         })
//     }
//     return arr
// }
// export function objConversionMapArr(obj){
//     obj = obj || {}
//     let arr = []
//     for(let x in obj){
//         arr.push({
//             name: obj[x],
//             key: x,
//             value:'',
//         })
//     }
//     return arr
// }
//
// //是否admin平台用户
// export function isAdmin(){
//     let userInfo: any = UserModule.userInfo || {}
//     let currentType: number = userInfo.organizationType
//     return currentType && currentType == 9   //type 为9 == admin
// }
//
// //根据type判断当前机构类型是否匹配
// export function isNeedOrganization(type) {
//     //1:核心 2:供应 3:小微 4:银行
//     let userInfo: any = UserModule.userInfo || {}
//     let currentType: number = userInfo.organizationType
//     return currentType == type
// }
//
// //根据id判断当前机构类型ID是否匹配
// export function isOrganizationId(id: number) {
//     let userInfo: any = UserModule.userInfo || {}
//     let currentId : number = userInfo.organizationId
//     return currentId === id
// }
//
// //根据订单不同状态返回不同对应值
// export function returnMsgByOrderStatus(row) {
//     //row.orderType:1=订单A 2=订单B
//     //status: 1=待确认 2=已确认 3=运输中 4=运输完成
//     //afterSaleStatus：0=未售后 1=发起售后 2=确认售后 3售后完成
//     //recheckStatus：0=未复检 1=发起复检 2=确认复检 3复检完成
//     //orgTypeCreate     生成订单机构类型
//     //orgTypeConfirm    确认订单机构类型
//     //orgTypeCompleted  订单完成机构类型
//     //orgTypeSale       申请售后机构类型
//     //orgTypeRecheck    申请复检机构类型
//     const MSG = {
//         A_WAITING_SUPPLY_CONFIRM:'待供应确认',
//         A_ALREADY_SUPPLY_CONFIRM:'供应已确认',
//         B_WAITING_SMALL_CONFIRM:'待小微确认',
//         B_ALREADY_SMALL_CONFIRM:'小微已确认',
//         TRANSPORTING:'货物运输中',
//         TRANSPORTED:'运输完成',
//         SALE_CONFIRM:'复检已完成',
//         WAITING_CORE_REVIEW:'待核心复检',
//         WAITING_SUPPLY_REVIEW:'待供应复检',
//         WAITING_SMALL_REVIEW:'待小微复检',
//         FINISH_REVIEW:'复检完成',
//         ALREADY_APPLY_SALES:'已申请售后',
//         WAITING_SUPPLY_APPLY_SALES:'待供应确认售后',
//         WAITING_SMALL_APPLY_SALES:'待小微确认售后',
//         FINISH_APPLY_SALES:'售后完成，待核心复检',
//         ORDER_IN_SETTLED: '订单结算中',
//         ORDER_IS_SETTLED: '订单已结算'
//     }
//     switch (row.status) {
//         case 1:
//             if(row.orderType == 1){
//                 return `待${returnOrganizationByType(row.orgTypeConfirm)}确认`
//                 // return MSG['A_WAITING_SUPPLY_CONFIRM']
//             }else{
//                 // return MSG['B_WAITING_SMALL_CONFIRM']
//                 return `待${returnOrganizationByType(row.orgTypeConfirm)}确认`
//             }
//         case 2:
//             // if(row.orderType == 1){
//             //     return MSG['A_ALREADY_SUPPLY_CONFIRM']
//             // }else{
//             //     return MSG['B_ALREADY_SMALL_CONFIRM']
//             // }
//             return `已确认，待${returnOrganizationByType(row.orgTypeConfirm)}生成运单`
//         case 3:
//             return MSG['TRANSPORTING']
//         case 4:
//             if(row.afterSaleStatus == 0 && row.recheckStatus == 0){
//                 return MSG['TRANSPORTED']
//             }
//             else if(row.afterSaleStatus == 3 && row.recheckStatus == 0){
//                 return MSG['FINISH_APPLY_SALES']
//             }
//             else if((row.afterSaleStatus == 0 || row.afterSaleStatus == 2) && row.recheckStatus == 1 && row.settleStatus == 0){
//                 return MSG['SALE_CONFIRM']
//             }
//             else if((row.afterSaleStatus == 0 || row.afterSaleStatus == 3) && row.recheckStatus == 2){
//                 return MSG['WAITING_SMALL_REVIEW']
//             }
//             else if((row.afterSaleStatus == 0 || row.afterSaleStatus == 2) && row.recheckStatus == 1 && row.settleStatus == 0){
//                 return MSG['FINISH_REVIEW']
//             }
//             else if(row.afterSaleStatus == 1 && row.recheckStatus == 0){
//                 return `待${returnOrganizationByType(row.orgTypeConfirm)}确认售后`
//                 // return MSG['ALREADY_APPLY_SALES']
//             }
//             else if(row.afterSaleStatus == 2 && row.recheckStatus == 0){
//                 return `${returnOrganizationByType(row.orgTypeConfirm)}已确认售后`
//                 // return MSG['WAITING_SMALL_APPLY_SALES']
//             }
//             // else if(row.afterSaleStatus == 3 && row.recheckStatus == 0){
//             //     return MSG['FINISH_REVIEW']
//             // }
//             else if(row.recheckStatus == 1 && row.settleStatus == 1){
//                 return MSG['ORDER_IN_SETTLED']
//             }
//             else if(row.recheckStatus == 1 && row.settleStatus == 2){
//                 return MSG['ORDER_IS_SETTLED']
//             }
//         default:
//             return '未知状态'
//     }
// }
//
// export function returnOrganizationByType(type) {
//     if(!type) return ;
//     let msg = ''
//     switch (type) {
//         case 1:
//             msg = '核心企业'
//             break
//         case 2:
//             msg = '供应公司'
//             break
//         case 3:
//             msg = '小微企业'
//             break
//     }
//     return msg
// }
//
// export function returnMsgByBuyerContractStatus(row,isBuyer){
//     row = row || {}
//     let msg = '未知状态'
//     switch (row.status) {
//         case 1:
//             msg = `待${isBuyer ? returnOrganizationByType(row.buyerSignContract) : returnOrganizationByType(row.sellerSignContract)}签署`
//             break
//         case 2:
//             msg = `待${isBuyer ? returnOrganizationByType(row.sellerSignContract) : returnOrganizationByType(row.buyerSignContract)}签署`
//             break
//         case 3:
//             msg = `待${returnOrganizationByType(row.achiveContract)}归档`
//             break
//         case 4:
//             msg = `已归档`
//             break
//     }
//     return msg
// }
//
// export default {
//     showImgByUrl:showImgByUrl,
//     compareType:compareType,
//     arrayConversionObj:arrayConversionObj,
//     strConversionObj:strConversionObj,
//     conversionSignMap:conversionSignMap,
//     conversionParamMap:conversionParamMap,
//     objConversionMapArr:objConversionMapArr,
//     objConversionSignArr:objConversionSignArr,
//     isAdmin:isAdmin,
//     isNeedOrganization:isNeedOrganization,
//     isOrganizationId,
//     returnMsgByOrderStatus:returnMsgByOrderStatus,
//     returnMsgByBuyerContractStatus:returnMsgByBuyerContractStatus,
// }
