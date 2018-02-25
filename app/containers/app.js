import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
// import Menu from '../pages/Menu';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Loan from '../pages/Loan';
import Invest from '../pages/Invest';
import Find from '../pages/Find';
import Mine from '../pages/Mine';
// import SelectProjects from '../pages/SelectProjects';

const TabContainer = TabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarLabel: '首页',
            },
        },
        Loan: {
            screen: Loan,
            navigationOptions: {
                tabBarLabel: '贷款',
            },
        },
        Invest: {
            screen: Invest,
            navigationOptions: {
                tabBarLabel: '投资',
            },
        },
        Find: {
            screen: Find,
            navigationOptions: {
                tabBarLabel: '发现',
            }
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarLabel: '我的',
            }
        }
    },
    {
        initialRouteName: 'Main',
        lazy: true,
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#91B1C2',
            inactiveTintColor: '#444444',
            showIcon: true,
            style: {
                backgroundColor: '#fff',
                elevation: 0,//Android
                shadowOpacity: 0,//iOS
            },
            indicatorStyle: {
                opacity: 0,
            },
            tabStyle: {
                padding: 0,
            },
            labelStyle: {
                fontSize: 10
            }
        }
    }
);

const App = StackNavigator(
    {
        Home: {
            screen: TabContainer,
            navigationOptions: {
                //headerTitle: '开发项目',
            }
        },
        Login: { screen: Login }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(63, 81, 181, 1)',
                height: 45,
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center'
            },
            headerTintColor: '#fff'
        }
    }
);
const prevGetStateForAction = App.router.getStateForAction;
App.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    if (state && action.type === 'BcakToCurrentScreen') {
        function findDateInArr(arr, propertyName, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][propertyName] == value) {
                    return i;
                }
            }
            return -1;
        }
        var i = findDateInArr(state.routes, 'routeName', action.routeName);
        if (i != -1) {
            var routes = state.routes.slice(0, i + 1);
        }
        return {
            ...state,
            routes,
            index: routes.length - 1,
        }
    }
    return prevGetStateForAction(action, state);
};

export default App;