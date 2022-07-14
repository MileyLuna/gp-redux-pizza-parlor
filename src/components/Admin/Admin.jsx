import './Admin.css'

function Admin() {
  return (
    <div>
    <header id = "adminHeader">
      <h1>Admin Page</h1>
    </header>
      <table>
  <tr>
    <th>Name:</th>
    <th>Order Placed At:</th>
    <th>Type</th>
    <th>Cost</th>
  </tr>
  <tr>
    <td>Peter Griffin</td>
    <td> 12/31/21 at 4:20 PM </td>
    <td>Delivery</td>
    <td>1.00</td>
  </tr>
  <tr>
    <td>Peter Griffin</td>
    <td> 12/31/21 at 4:20 PM </td>
    <td>Delivery</td>
    <td>1.00</td>
  </tr>
  <tr>
    <td>Peter Griffin</td>
    <td> 12/31/21 at 4:20 PM </td>
    <td>Delivery</td>
    <td>1.00</td>
  </tr>
</table>
    </div>
  );
}

export default Admin;