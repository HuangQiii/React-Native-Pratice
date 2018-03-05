const layout = {
    //margin,padding eg:[1],[1,1],[1,1,1],[1,1,1,1]
    margin(...arg) {
        let margin = {};
        switch (arg.length) {
        case 1:
            margin = {
            marginTop: arg[0],
            marginRight: arg[0],
            marginBottom: arg[0],
            marginLeft: arg[0],
            };
            break;
        case 2:
            margin = {
            marginVertical: arg[0],
            marginHorizontal: arg[1],
            };
            break;
        case 3:
            margin = {
            marginTop: arg[0],
            marginHorizontal: arg[1],
            marginBottom: arg[2],
            };
            break;
        case 4:
            margin = {
            marginTop: arg[0],
            marginRight: arg[1],
            marginBottom: arg[2],
            marginLeft: arg[3],
            };
            break;
        default:
            break;
        }
        return margin;
    },
    padding(...arg) {
        let padding = {};
        switch (arg.length) {
        case 1:
            padding = {
            paddingTop: arg[0],
            paddingRight: arg[0],
            paddingBottom: arg[0],
            paddingLef: arg[0],
            };
            break;
        case 2:
            padding = {
            paddingVertical: arg[0],
            paddingHorizontal: arg[1],
            };
            break;
        case 3:
            padding = {
            paddingTop: arg[0],
            paddingHorizontal: arg[1],
            paddingBottom: arg[2],
            };
            break;
        case 4:
            padding = {
            paddingTop: arg[0],
            paddingRight: arg[1],
            paddingBottom: arg[2],
            paddingLeft: arg[3],
            };
            break;
        default:
            break;
        }
        return padding;
    },
    //eg:[[1,'#000']],[[1,'#000'],[],[],[]]
    border(...arg) {
        let border = {};
        switch(arg.length){
            case 1:
                border = {
                    borderWidth:arg[0][0],
                    borderColor:arg[0][1],
                }
                break;
            case 2:
                border = {
                    borderTopWidth:arg[0][0],
                    borderTopColor:arg[0][1],
                    borderBottomWidth:arg[0][0],
                    borderBottomColor:arg[0][1],
                    borderLeftWidth:arg[1][0],
                    borderLeftColor:arg[1][1],
                    borderRightWidth:arg[1][0],
                    borderRightColor:arg[1][1],
                }
                break;
            case 3:
                border = {
                    borderTopWidth:arg[0][0],
                    borderTopColor:arg[0][1],
                    borderBottomWidth:arg[0][0],
                    borderBottomColor:arg[0][1],
                    borderLeftWidth:arg[2][0],
                    borderLeftColor:arg[2][1],
                    borderRightWidth:arg[1][0],
                    borderRightColor:arg[1][1],
                }
                break;
            case 4:
                border ={
                    borderTopWidth:arg[0][0],
                    borderTopColor:arg[0][1],
                    borderBottomWidth:arg[2][0],
                    borderBottomColor:arg[2][1],
                    borderLeftWidth:arg[3][0],
                    borderLeftColor:arg[3][1],
                    borderRightWidth:arg[1][0],
                    borderRightColor:arg[1][1],
                }
                break;
            default:
                break;   
        }
        return border;
    },
    //水平line，垂直居中，（水平居中）
    completeCenterInLine(...arg) {
        return {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
        }
    },
    verticalCenterInLine(...arg) {
        return {
            flexDirection:'row',
            justifyContent:'center',
        }
    },
    //垂直line，水平居中，（垂直居中）
    completeCenterInColumn(...arg){
        return {
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
        }
    },
    horizontalCenterInColumn(...arg){
        return {
            flexDirection:'column',
            justifyContent:'center',
        }
    }
};