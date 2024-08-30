const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table
      style={{
        borderCollapse: 'separate',
        borderSpacing: 0,
        width: '100%',
        marginBottom: '1.5rem',
        border: '2px solid var(--accent-color)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {children}
    </table>
  )
}

const TableHead = ({ children }: { children: React.ReactNode }) => (
  <thead>{children}</thead>
)

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
)

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr style={{ borderBottom: '2px solid var(--accent-color)' }}>{children}</tr>
)

const TableCell = ({
  isHeader,
  children,
}: {
  isHeader?: boolean
  children: React.ReactNode
}) => {
  const style = {
    padding: isHeader ? '8px 0' : '8px 16px',
    width: 'fit-content',
    backgroundColor: isHeader ? 'var(--accent-color)' : undefined,
    color: isHeader ? 'white' : 'var(--primary-color)',
    textAlign: isHeader ? ('center' as const) : ('left' as const),
  }
  return isHeader ? (
    <th style={style}>{children}</th>
  ) : (
    <td style={style}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        {children}
      </div>
    </td>
  )
}

export { Table, TableBody, TableCell, TableHead, TableRow }
