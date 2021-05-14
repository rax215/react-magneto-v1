const getTable = (attributes) => {
  return `<TableContainer style={{maxHeight: 440}}>
  <Table ${attributes.stickyHeader ? 'stickyHeader' : ''} >
    <TableHead>
      <TableRow>
      {tableColumns.length > 0 &&
        tableColumns.map((column) => (
          <TableCell key={column.field}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
    {tableRows.length > 0 &&
      tableRows.map((row) => (
        <TableRow key={row.id}>
          {Object.values(row).map((objValue) => (
            <TableCell key={objValue}>{objValue}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer> `;
};

module.exports = { getTable };
