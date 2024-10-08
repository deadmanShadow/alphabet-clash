import { motion } from "framer-motion";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="error"
        initial={{ opacity: 0 }}
        animate={{ opacity: error ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {error}
      </motion.p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            as={motion.div}
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {value}
          </Box>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Select Number
      </motion.p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }

  @media (max-width: 768px) {
    align-items: center;

    .flex {
      flex-wrap: wrap;
      gap: 16px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 10px;
    }

    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;
