import { 
    Container
} from './style.js'

import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Chart = () => {




    return (
        <Container>
            <Bar
                data={{
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago' ,'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [
                        {
                            label: "Usos por mês",
                            data: [200,300,400,100,300,200,500,150,550,300,400,800],
                        },
                    ], 
                }}
            />
        </Container>
    )
}

export default Chart;