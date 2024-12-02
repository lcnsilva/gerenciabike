import {
    StyledTable, TableData, TableHead,
    TableRow
} from './Table.js'

const Table = () => {

    const data = [{ nome: 'bicicleta', bicicleta: '80b62f14', topico: 'Pneu furado' },
    { nome: 'bicicleta2', bicicleta: '80b62f14', topico: 'Corrente Quebrada' },
    { nome: 'bicicleta3', bicicleta: '80b62f14', topico: 'Sem freio' },]

    return (
        <StyledTable>
            <TableRow>
                <TableHead colSpan={3}>
                    Relatórios de Manutenção
                </TableHead>
            </TableRow>
            <TableRow>
                <TableHead>
                    Nome
                </TableHead>
                <TableHead>
                    Tag RFID
                </TableHead>
                <TableHead>
                    Defeito
                </TableHead>
            </TableRow>
            {data.map((bicicleta) =>
                <TableRow key={bicicleta.nome}>
                    <TableData>
                        {bicicleta.nome}
                    </TableData>
                    <TableData>
                        {bicicleta.bicicleta}
                    </TableData>
                    <TableData>
                        {bicicleta.topico}
                    </TableData>
                </TableRow>
            )}
        </StyledTable>
    )
}

export default Table;