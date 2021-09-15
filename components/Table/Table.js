const getTable = (attributes) => {
  let component = '';
  let library = attributes.library ? attributes.library : "materialUi";
  if (attributes.library === "primeReact") {
    component = `<div>
    <div className="card">
        <DataTable value={tableRows}>
          {tableColumns.map((column) => (
            <Column key={column.field} field={column.field} header={column.label} />
            ))}
        </DataTable>
    </div>
  </div>`;
  } else if (attributes.library === "materialUI") {
    component = `<TableContainer style={{maxHeight: 440}}>
  <Table ${attributes.stickyHeader ? "stickyHeader" : ""} >
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
  }

  return component;
};

module.exports = { getTable };
