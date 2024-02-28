import {
  Badge,
  Modal,
  styled,
  Typography,
  Box
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReactPlayer from 'react-player';

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Notimodal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Badge badgeContent={1} color="error">
        <NotificationsIcon onClick={(e) => setOpen(true)} />
      </Badge>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={700}
          height={700}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Welcome to Fitness Club
          </Typography>
          <Typography sx={{ color: "#cf441f" }} align="center" mb="15px" >__________   ♦   __________ </Typography>
          <UserBox>
          <ReactPlayer 
              url='https://res.cloudinary.com/dps8xubee/video/upload/v1660775527/videos/hlyhjkps3qzgwpxkj3gl.mp4' 
              playbackRate={3} muted={true} playing={true} controls={false} 
              height={480} width={700} 
                />
            
          </UserBox>
        </Box>
      </SytledModal>
    </>
  );
};

export default Notimodal;
