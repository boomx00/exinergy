import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import CompanyLogo from '../../images/logo_exinergy.png'
import { forwardRef, useRef, useImperativeHandle } from "react"

const Document = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        foo(data) {
            var total = 0;
            data.forEach(function(item,index){
                total += parseInt(item[2])
                
            })
            data.push([{ content: "Total", colSpan: 2},{ content: total, colSpan: 1}])
            print(data)
            data.pop()
        },
      }))
    const doc = new jsPDF();

    const savePDF=()=>{
        window.open(doc.output('bloburl'))
        }
    const print=(data)=>{
        doc.addImage(CompanyLogo,"png",55,0,100,30)
        doc.setFontSize(10)
        doc.text(["Citta Graha, Jl. Panjang No.26, RT.6/RW.1, Kota Jakarta Barat, 11520"], 50, 30);
        doc.line(10,40,200,40)
        doc.text("Kepada Yth: "+ props.receiver, 10,50)
        var title= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        var splitTitle = doc.splitTextToSize(title, 180);
        
        doc.text( 10,60,title,{maxWidth: 185, align: "justify"})
        
        autoTable(doc, {
        theme: 'grid',
        head: [['Name', 'Email', 'Country']],
        startY: 80,
        body: data,
        },
        )
        savePDF()
    }
   
    
    

    return(
        <div>

        </div>
    )
})



export default Document