import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { pink, deepPurple, amber } from "@mui/material/colors"
import PaidIcon from "@mui/icons-material/Paid"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import { Typography } from "@mui/material"

const KPICards = () => {


  
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <PaidIcon sx={{ fontSize: "1.8rem" }} />,
      amount: "€12000000",
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasketIcon sx={{ fontSize: "1.7rem" }} />,
      amount: "€350000000",
      color: pink[700],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      amount: "€4000000",
      icon: <LocalMallIcon sx={{ fontSize: "1.7rem" }} />,
      color: amber[700],
      bgColor: amber[100],
    },
  ]
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((data) => (
        <Paper
          key={data.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: 275,
            p: 2,
            pl: 3,
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>

          <Box>
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="h5">{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  )
}

export default KPICards
