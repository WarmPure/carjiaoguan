interface ISettings {
    organizationTypes: any[] //企业类型
    personalTypes: any[]  //个人类型
    productType: any[]
}

const publicData: ISettings = {
    organizationTypes: [
        {value: 1, label: "施工方"},
        {value: 2, label: "供应链公司"},
        {value: 3, label: "供货方"},
        {value: 4, label: "银行"},
        {value: 5, label: "采购公司"},
        {value: 6, label: "一级代理公司"},
        {value: 7, label: "物流"},
    ],
    personalTypes: [
        {value: 8, label: "司机"},
        {value: 10, label: "收货人"}
    ],
    productType: [
        {value:1,label:'钢材'},
        {value:2,label:'煤'}
    ]
}

export default publicData
