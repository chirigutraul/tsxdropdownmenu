import {makeStyles} from 'tss-react/mui'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from 'react'

export default function DropDown(props:any) {
    const {classes} = useStyles()
    const [dropDownItemsVisibility, setDropDownItemsVisibility] = useState(false)

    const dropDownItems = props.dropdownItems ||
    [
        {
            value:'Profile',
            link:'/profile'
        },
        {
            value:'Settings',
            link:'/settings'
        },
        {
            value:'Friends',
            link:'/friends'
        },
        {
            value:'Logout',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    ]

    const [selectedItem, setSelectedItem] = useState(dropDownItems[0].value)

    const toggleDropDown = () => {
        setDropDownItemsVisibility(!dropDownItemsVisibility)
    }

    const selectDropDownItem = (item:any) => {
        setSelectedItem(item.value)
        toggleDropDown()
    }

    return (
    <div className={classes.dropDownContainer}>
        <div className={classes.dropDown} onClick={toggleDropDown}>
            <h4>{selectedItem}</h4>
            <KeyboardArrowDownIcon fontSize='medium' />
        </div>

        { 
        dropDownItemsVisibility && 
        <div>
            {
            dropDownItems.map((item:any)=>
                <div className={classes.dropDownItem}
                onClick={()=>selectDropDownItem(item)}>
                    <a href={item.link}>
                    <h4>{item.value}</h4>
                    </a>
                </div>)
            }
        </div>
        }
        
    </div>
    )
}

const useStyles = makeStyles()(()=>({
    dropDownContainer:{ 
        position:'absolute',
        color:'#FFF',
        width:200,
        backgroundColor:'black',
        border:'1px solid #FFF',
        borderRadius:'0.5rem'
    },
    dropDown:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        ':hover':{
            color:'#808080'
        },
        borderRadius:100
    },
    dropDownItem:{
        display:'flex',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        ':hover':{
            backgroundColor:'#565656',
        },
        '& a':{
            color:'#FFF',
            textDecoration:'none'
        }
    }
}))
