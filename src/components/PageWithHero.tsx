import { motion, } from "framer-motion";
import { Container } from "@mui/material";
import Title from "./Title";

type Props = {
  bg: string;
  title: string;
  children: React.ReactNode;
};

export default function PageWithHero(props: Props) {
  return (
    <div style={{width: "100%"}}>
      <Title
        title={props.title}
        bg={props.bg}
      />
      <Container style={{marginTop: "24px"}}>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
        >
            {props.children}
        </motion.div>
      </Container>
    </div>
  );
}