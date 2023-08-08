   // Your React code here
   
   const products=[
       {
    name: "coke",
    price: 10.99,
    specs: "Specs for coke",
    availableItems: 7,
  },

 {
    name: "sweet",
    price: 10.99,
    specs: "Specs for sweet",
    availableItems: 3,
  },

 {
    name: "jug",
    price: 7.99,
    specs: "Specs for jug",
    availableItems: 15,
  },

 {
    name: "book",
    price: 4.99,
    specs: "Specs for book",
    availableItems: 5,
  },

 {
    name: "pen",
    price: 104.99,
    specs: "Specs for pen",
    availableItems: 1,
  },

 {
    name: "soap",
    price: 150.99,
    specs: "Specs for soap",
    availableItems: 9,
  },
   ];


    const ItemList =
        products.map((each)=>
            <li className=" w-full flex flex-col align-right flex-1">
                <div><p> {each.name}</p>
                </div>
                <div className="flex-row flex-grow align-justify">
          <span className="text-gray-400">${each.price}</span>
          </div><div >
              
          <span>{each.specs}</span>
           <span className="bg-green-900 rounded-full p-1 w-1/14 text-center text-red-600">{each.availableItems} left</span>
         </div>
                <hr />
            </li>)
    
    /* =(products) => ([products.map((r)=>r.name)].map((y)=>
        (
        <li key={y} value={y}>{y}</li>
        )));*/
    
    const Suggestions=(
        
            <ul>
                {ItemList}
                </ul>
        )
    
   
   console.log("by prosper, wink test pass",ItemList)
    //v7
    const Receipt = () => {
  const [rows, setRows] = React.useState([]);
  const [customerName, setCustomerName] = React.useState("");
  const [dateTime, setDateTime] = React.useState(new Date());

  const handleAddRow = () => {
    setRows([...rows, { qty: 1, item: "", rate: 0, amount: 0 }]);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    // Calculate the new "Amount" based on "Rate" and "Qty"
    if (field === 'qty' || field === 'rate') {
      const qty = parseFloat(updatedRows[index].qty);
      const rate = parseFloat(updatedRows[index].rate);
      updatedRows[index].amount = qty * rate;
    }

    setRows(updatedRows);
  };

  const calculatedTotal = rows.reduce((acc, row) => acc + row.amount, 0);

  return (
    <div className="w-full text-blue-900">
      <h1 className="text-center text-xl font-bold">Receipt</h1>
      <form autocomplete="off" className="w-full">
        <div className="flex justify-between">
          <div className="block">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <div className="block">
            <label htmlFor="dateTime">Date and Time</label>
            <input 
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-blue-1000">
            <thead>
              <tr>
        <th className="px-0 py-1">Qty</th>
        <th className="px-0 py-1">Item</th>
        <th className="px-0 py-1">Rate</th>
       <th className="px-0 py-1">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <Row
                  key={index}
                  qty={row.qty}
                  item={row.item}
                  rate={row.rate}
                  amount={row.amount}
                  onChange={(field, value) => handleChange(index, field, value)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <h2 className="text-xl">Total:</h2>
         {'calculatedTotal' && (<input
            type="number"
            value={calculatedTotal}
            readOnly
            className="w-full p-2 bg-gray-200"
          />)}
        </div>
        <button
          className="mt-4 btn btn-primary"
          type="button"
          onClick={handleAddRow}
        >
          Add Row
        </button>
        <button
          className="mt-4 btn btn-primary"
          type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

const Row = ({ qty, item, rate, amount, onChange }) => {
  return (
    <tr>
      <td >
        <input 
          type="number"
          value={qty}
          onChange={(e) => onChange('qty', e.target.value)}
          className="w-full p-2"
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          list="Suggestions"
          value={item}
          onChange={(e) => onChange('item', e.target.value)}
          className="w-full p-2"
        ></input>
      </td>
      
      <td>
        <input
          type="number"
          value={rate}
          onChange={(e) => onChange('rate', e.target.value)}
          className="w-full p-2"
        ></input>
      </td>
      
      <td>
        <input
          type="number"
          value={amount}
          readOnly
          onChange={(e) => onChange('amount', e.target.value)}
          className="w-full p-2"
        ></input>
      </td>
      
      </tr>
)}


    //endv7
    
     
   
    //////header
    const Header=()=> {
        
      
   return(
        <div className="h-1/10">
           
            <h1 className='text-lg font-bold'>Prosper</h1>
            <nav className='relative flex justify-around'>
                
        
           </nav>
           
            </div>
        )
    }
    
    
    
      const Footer=()=> {
        
      
   return(
        <div className="h-1/6">
           <SideNav/>
            <h1 className='text-lg font-bold'>Footer</h1>
            <nav className='relative flex justify-around'>
                
        
           </nav>
           
            </div>
        )
    }
  
    const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);

  const NavList = () => {
    var NavItems = [
      "Profile",
      "New Products",
      "Sales",
      "Stock",
      "Reports",
      "Customers",
      "Supplieres",
      "Orders",
      "Settings"
    ];
    return (
      <ul className='relative flex justify-around flex-row'>
        {NavItems.map((item) => (
          <p className="mr-4">{item}</p>
        ))}
      </ul>
    );
  };

  const handleToggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Icon/Button to open the side nav */}
      <button onClick={handleToggleSideNav}>
        <i className="fas fa-bars"></i> menu
      </button>

      {/* Side Nav content */}
      {isSideNavOpen && (
        <div className="side-nav">
          {/* Your side navigation content goes here */}
          <ul>
            <NavList />
            {/* Add more navigation items */}
          </ul>
        </div>
      )}
    </div>
  );
};

const RightTab=()=>{
    return <div className="bg-red-300 container text-lg">
        Recent
        
        
    </div>
}
const MiddleTab=()=>{
    
    return (<div className="bg-yellow-500 container flex-wrap ">Middle Tab
    
       
    <hr />
    <h1 className="text-sm font-bold text-purple-600">Hello, this Receipt is generated by React!</h1>
        <Receipt/>  

         
    </div>)
}

function WindowArea() {
      const [openWindowId, setOpenWindowId] = React.useState(null);

      const handleOpenWindow = (windowId) => {
        setOpenWindowId(windowId);
      };

      const handleCloseWindow = () => {
        setOpenWindowId(null);
      };

return {openWindowId, handleOpenWindow, handleCloseWindow}
 }
 

const LeftTab = () => {
  var Items = [
    "Profile",
    "Products",
    "Sales",
    "Stock",
    "Reports",
    "Customers",
    "Suppliers",
    "Orders",
    "Settings"
  ];
const { openWindowId, handleOpenWindow, handleCloseWindow } = WindowArea(); 
  const list1 = Items.map(function eat(item) {
    return (
    <div  className=" bg-white-700 p-4 rounded-lg clicked:bg-black-500">
    <button index={item} 
   onClick={()=>handleOpenWindow(item)} 
    >{item}
    </button>
    <hr />
    </div> );
  });
  const CloseBtn=()=>{
      return (
          <button className=" top-0 left-0" onClick={()=>handleCloseWindow()}> close</button>
      )
  }
  
 const Profile=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center overflow-sroll">
      
      
    <div className=" items-center relative text-xl font-bold w-full h-screen"><button className=" top-0 left-0" onClick={()=>handleCloseWindow()}> close</button><hr /><h1 className="top-10 "> User Profile </h1> 
    
  
        <img className="w-full h-1/3" src="profile.jpg" alt="profile-pic"/>
    <h1>Business Name</h1>
    <h2>Bio:Welcome to buy again</h2>
    <Receipt />
    <button className="rounded-full bg-green"> order Now</button>
    <p>items available</p>
    {Suggestions}
    </div>
  </div>
)
}

////the nav windows

const Products=()=>{
    return (
  <div href="" className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Products</h1>
        
        {Suggestions} </div>
  </div>
)
}
const Sales=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Sales</h1> </div>
  </div>
)
}
const Stock=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Stock</h1> </div>
       {Suggestions}
  </div>
)
}
const Reports=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Reports</h1> </div>
  </div>
)
}
const Customers=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Customers</h1> </div>
  </div>
)
}
const Suppliers=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Suppliers</h1> </div>
  </div>
)
}
const Orders=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Orders</h1> </div>
  </div>
)
}
const Settings=()=>{
    return (
  <div className=" transition-opacity duration-1000  fixed top-0 left-0 h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
    <div className="relative text-xl font-bold w-full h-screen">
        <CloseBtn/>
        <hr />
        <h1 className="top-10">Settings</h1> </div>
  </div>
)
}

/*what to hide*/
  return (
    <div className="xs:hidden overflow-x-scroll  bg-blue-500 container">
      Left Tab
      <hr />
      {openWindowId}
      {openWindowId === "Profile" && <Profile/>}
       

 {openWindowId === "Products" && <Products/>}

 {openWindowId === "Sales" && <Sales/>}

 {openWindowId === "Stock" && <Stock/>}

 {openWindowId === "Reports" && <Reports/>}

 {openWindowId === "Customers" && <Customers/>}

 {openWindowId === "Suppliers" && <Suppliers/>}

 {openWindowId === "Orders" && <Orders/>}

 {openWindowId === "Settings" && <Settings/>}
      <ul class="bg-red">{list1}</ul>
    </div>
  );
};


  //////////////
    const App = () => {
      return (
        <div className="container overflow-auto min-h-screen flex-row flex-grow items-stretch h-full border-4 border-dashed border-black h-screen inset-0 ">
            
           <Header />
                <div>
                <div className=" flex flex-row-reverse flex-grow container:none sticky inset-0 h-5/6 border-4">
            
                
              
              
               <MiddleTab /> 
 <LeftTab/> 
                     </div>
                     </div>
                   
                    
<Footer/>
                     
          
        </div>
      );
    };

    // Render the React component to the root element
    ReactDOM.render(<App />, document.getElementById('root'));
 
