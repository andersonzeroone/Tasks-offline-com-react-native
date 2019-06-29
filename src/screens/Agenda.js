import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../component/Task'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Agenda extends Component {
    state = {
        tasks: [
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Terminar modulo',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir',
                estimateAt: new Date(), doneAt: null
            },
        ],
        visibleTasks: [],
        showDonetasks: true,
    }
    filterTasks= () => {
        let visibleTasks= null
        if ( this.state.showDonetasks) {
            visibleTasks = [...this.state.tasks]
        }else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTasks })
    }

    toggleFilter = () => {
        this.setState({ showDonetasks: !this.state.showDonetasks },
             this.filterTasks)
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    toggleTask = id => {
        const  tasks = this.state.tasks.map(task => {
            if(task.id === id ){
                task = { ...task }
                task.doneAt = task.doneAt ? null: new Date() 
            }
            return task
        })

        this.setState({ tasks }, this.filterTasks)
    }
 
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} 
                    style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress= { this.toggleFilter }>
                            <Icon name={this.state.showDonetasks ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary} >
                            </Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd,D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taksContainer}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} />} >
                    </FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontfamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontfamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,

    },
    taksContainer: {
        flex: 7,
    },
    iconBar: {
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})
