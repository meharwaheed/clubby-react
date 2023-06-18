import Button from "@mui/material/Button";

function CustomButton({ label, className, variant = 'contained', ...props}) {
 return (
     <Button
         style={{ borderRadius: '10px' }}
         className={className}
         variant={variant}
         {...props}
     >
         {label}
     </Button>
 )
}

export default CustomButton