import React ,{ Component} from  'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from    '../commonStyles'
import Task from '../component/Task'


export default class Agenda extends Component {
    render() {
        return(
            <View style={style.container}>
                <ImageBackground source={todayImage} style={style.background}>
                    <View style={style.titleBar}>
                        <Text style={style.title}>Hoje</Text>
                        <Text style={style.subtitle}>
                            {moment().locale('pt-br').format('ddd,D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={style.taksContainer}>
                    <Task desc='Tarefas pendentes'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida'
                        estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc='Tarefas pendentes'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida'
                        estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc='Tarefas pendentes'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida'
                        estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc='Tarefas pendentes'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida'
                        estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc='Tarefas pendentes'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa concluida'
                        estimateAt={new Date()} doneAt={new Date()} />                
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
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
        fontFamily: commonStyle.fontfamily,
        color: commonStyle.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyle.fontfamily,
        color: commonStyle.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,

    },
    taksContainer: {
        flex: 7,
    }
})
