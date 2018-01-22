class Computer{
    constructor(RAM, HDD, Model, price, years)
    {
      this.setRam(RAM);
      this.setHDD(HDD);
      this.Model = Model;
      this.setPrice(price);
      this.setWarranty(years);
    }
    setRam(RAM)
    {
       if (RAM<=16 && RAM>=4)
        this.RAM = RAM
        else throw new Error("Check your RAM!")
    }
    getRam()
    {
      return this.RAM;
    }
    setHDD(val){
      if (val<=3000 && val>=200)
      this.HDD = val
      else throw new Error('Check your HDD!')
    }
    getHDD(){
      return this.HDD;
    }
    setPrice(price){
      if (price<=20000 && price>=800)
      this.price = price
      else throw new Error ('Check the price!')
    }
    getPrice()
    {
      return this.price
    }
    setWarranty(years)
    {
      if(years>=0 && years<=5)
      this.warranty = years
      else throw new Error("Check year's value")
    }
    getWarranty() {
      return this.warranty
    }
  }
  Computer.prototype.sales = function(addProduct="headphones"){
      return "You must buy " + addProduct;
  }
  Computer.prototype.print = function(){
    str =''
    for (var i in this)
    {
      if(typeof this[i] != 'function')
      str+=`${i}: ${this[i]}\n`
    }
    return str;
  }
  class Desktop extends Computer{
    constructor(RAM, HDD, Model, price, years, mouseIsWireless, inch)
    {
      super(RAM, HDD, Model, price, years);
      this.setMouseWireless(mouseIsWireless)
      this.setDisplayResolution(inch)
    }
  sales(){
    return super.sales('table for your computer');
  }
  setMouseWireless(mouseIsWireless)
      {
        if (typeof mouseIsWireless === 'boolean')
        this.mouseIsWireless = mouseIsWireless
      }
  getMouseWireless()
      {
        return this.mouseIsWireless;
      }
  setDisplayResolution(inch)
  {
    if (inch>=11 && inch<=17)
      this.inch = inch;
  }
  getDisplayResolution()
  {
    return this.inch
  }
  }
  class Laptop extends Computer
  {
    constructor(RAM, HDD, Model, price, years, time, percent, sensor)
    {
      super(RAM, HDD, Model, price, years);
      this.setCharging(time);
      this.setPercentOfBattery(percent);
      this.setSensor(sensor)
    }
    setCharging(time)
    {
      if(time>=1 && time<=9)
      this.time = time;
    }
    getCharging(){
      return this.time;
    }
    setPercentOfBattery(percent)
    {
      if(percent>=0 && percent<=100)
      this.percent = percent
    }
    getPercentOfBattery()
    {
      return this.percent
    }
    fullBatery()
    {
      if(this.percent === 100)
      return "Your laptop is full charged!"
    }
    setSensor(sensor)
    {
      if(typeof sensor === "boolean")
      this.sensor = sensor;
    }
    getSensor()
    {
      return this.sensor;
    }
  sales(){
    return super.sales('Laptop bag');
  }  
  }
  
  let comp = new Computer(6,444,'Dell',800,4, true, 16);
  console.log(comp.sales())
  console.log(comp.print())
  let desk = new Desktop(5,200,'Dell',800,4, true, 16);
  console.log(desk.sales())
  console.log(desk.print())
  let note = new Laptop(8, 500,'Apple',10000, 3, 8, 100, true);
  console.log(note.sales())
  console.log(note.print())
  console.log(note.fullBatery())
  
  
    let desktopPrototypes = Object.getOwnPropertyNames(Desktop.prototype);
    let laptopPrototypes = Object.getOwnPropertyNames(Laptop.prototype);
  
  function executeActions(obj, func){
    for (let i in func)
    {
      let examp = func[i]
      if(typeof obj[examp] === 'function' && examp != 'constructor')
      obj[examp]();
    }
  }
  
   function checking(){
      let arr = [];
      for (let i=0; i<10; i++){
          if(i%2 === 0 && i !== 0){
          arr.push(desk);
          let  func = desktopPrototypes;
                  }
         else
         {
            arr.push(note);
              func = laptopPrototypes;
         }
            executeActions(arr[i], func)
         }
            console.log(arr)
         }
          checking();