import React,{useState} from 'react'


function WordCounter() {
  const [val,setVal]=useState('')
  const [word,setWord]=useState(0)

  const handleChange = (e) =>{
    const data = e.target.value.split(' ')
    console.log(data)
    setVal(e.target.value)
    setWord(data.length)
    if(e.target.value==''){
      setWord(0)
    }
    else if(e.target.value=='" "$')
    {
      setWord(data.length-1);
    }
  }

  return (
    <div style={{padding:"25%", paddingTop:0,paddingBottom:0}}>
    <h1 style={{textAlign:'center',fontFamily:"cursive"}} >Responsive Paragraph Word Counter</h1>
    <textarea style={{height:150 ,width:"100%",border:"solid",borderRadius:10}} value={val} onChange={(e)=>handleChange(e)}/>
    <h4 style={{textAlign:'left',color:"gray",fontFamily:"cursive"}}>Word Count: {word}</h4>
    </div>
  )
}

export default WordCounter;