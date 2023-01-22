import {
  Box,
  SimpleGrid,
  Select,
  Option,
  Button,
  GridItem,
  Image,
  Flex,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Collapseble from "../Elements/Collapseble";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { FaStar } from "react-icons/fa";
import AlertAddButton from "../Elements/AlertAddToCart";
import { CartContext } from "../Contexts/CartContext";

const FilterPrice = [
  "₹25 - ₹50",
  "₹50 - ₹100",
  "₹100 - ₹200",
  "₹200 - ₹500",
  "More than ₹500",
];
const FilterSizeType = ["STANDARD", "PLUS", "PETITE", "REGULAR"];
const FilterBySizeNo = [
  "XXS",
  "XS",
  "XS/S",
  "S",
  "M",
  "M/L",
  "L",
  "XL",
  "XXL",
  "XS P",
  "S P",
  "M P",
  "L P",
  "XL P",
];
const FilterByBrand = [
  "Allina",
  "Amadi",
  "Amsale",
  "AMUR",
  "ASTR The Lable",
  "Atsu",
  "Audrey Adele",
  "Aureta",
  "Baobab",
  "Beach Riot",
];
const FilteByColor = [
  "Black",
  "White",
  "Blue",
  "Green",
  "Assorted",
  "Pink",
  "beige",
  "Red",
  "Purple",
  "Orange",
  "Brown",
  "Grey",
  "Yellow",
  "Gold",
  "Silver",
  "Mint",
];

const getData = async (order, page) => {
  try {
    const res = await fetch(
      `https://json-server-m3p9.onrender.com/product?_sort=price&_order=${order}&_limit=9&_page=${page}`
    );
    const data = await res.json();
    // console.log(res.headers.get("X-Total-Count"));
    const obj = { data: data, total: res.headers.get("X-Total-Count") };
    return obj;
  } catch (error) {
    console.log(error);
  }
};

// getData();

function Products() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {searchData} = useContext(CartContext);

  const fetchedData = async (order, page) => {
    setIsLoading(true);
    try {
      const result = await getData(order, page);

      setData(result.data);
      setTotal(result.total);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedData(order, page);
  }, [order, page]);

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

    //  console.log(data);

  return (
    <>
      <Divider h={"2px"} backgroundColor={"#ffcc00"} />
      <Box
        marginTop={"15px"}
        marginLeft={"20px"}
        marginRight={"20px"}
        textAlign={"start"}
      >
        <Text fontSize={"14px"} color={"#666666"} lineHeight={"22px"}>
          Home / Battery, Electrical & Wiring / Electrical Connectors & Sockets
          / Electrical Tape, Ties & Clamps
        </Text>
        <Heading fontSize={"24px"} lineHeight={"32px"}>
          Electrical Tape, Ties & Clamps
        </Heading>
      </Box>
      {/* <br /> */}
      <Divider h={"2px"} backgroundColor={"#ffcc00"} marginTop={"10px"} />
      <Box
        height={"auto"}
        marginTop={"20px"}
        marginLeft={"20px"}
        marginRight={"20px"}
      >
        <Flex>
          {/* ************** Collaseble ****************************************************** */}
          <Box w={"24%"} height={"auto"}>
            <Text fontSize={"20px"} textAlign={"start"}>
              Filter by:
            </Text>
            <br />
            <Divider borderColor={"gray"} />

            <Collapseble Filter={FilterPrice} filterBy={"Price"} />
            <Collapseble Filter={FilterSizeType} filterBy={"Size Type"} />
            <Collapseble Filter={FilterBySizeNo} filterBy={"Size"} />
            <Collapseble Filter={FilterByBrand} filterBy={"Brand"} />
            <Collapseble Filter={FilteByColor} filterBy={"Color"} />
          </Box>
          {/* ************** Products ****************************** */}
          <Box w={"76%"} height={"auto"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {/* <Text fontFamily={""} fontSize={"30px"} color={"#26262c"}>Dresses</Text> */}
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                Sort:
                <Select value={order} onChange={handleOrder} width={"170px"}>
                  <option value={""}>Featured</option>
                  <option value={"asc"}>Price: Low to High</option>
                  <option value={"desc"}>Price: High to Low</option>
                </Select>
              </Flex>
              <Box>
                <Button
                  bg={"black"}
                  isDisabled={page == 1}
                  onClick={() => setPage(page - 1)}
                >
                  <FaAngleDoubleLeft color={"#FDD131"} />
                </Button>
                <Button bg={"#FDD131"}>{page}</Button>
                <Button
                  bg={"black"}
                  isDisabled={page == Math.ceil(total / 9)}
                  onClick={() => setPage(page + 1)}
                >
                  <FaAngleDoubleRight color={"#FDD131"} />
                </Button>
              </Box>
            </Flex>
            {isLoading ? (
              <Flex alignItems={"center"} justifyContent={"center"} h={"100%"}>
                <FadeLoader size={150} color="#e8942a" />
              </Flex>
            ) : (
              <SimpleGrid columns={[1, 2, 2, 3]} gap={6} marginTop={"15px"}>
                {(searchData !== undefined && searchData !== null && searchData.lenght !== 40) ?  searchData?.map((el) => (
                  <Box
                    key={el.id}
                    padding={"10px"}
                    boxShadow={"2xl"}
                    borderRadius={"10px"}
                    borderTopLeftRadius={"60px"}
                  >
                    <Image
                      margin={"auto"}
                      w={"70%"}
                      h={"160px"}
                      src={el.img}
                      alt={"error"}
                    />
                    <Text
                      fontSize={"20px"}
                      fontFamily={"Times"}
                      textAlign={"start"}
                    >
                      {el.title}
                    </Text>
                    <Text
                      fontSize={"20px"}
                      fontFamily={"Times"}
                      textAlign={"start"}
                    >
                      {"₹ "}
                      {el.price}
                    </Text>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Flex>
                        <Text color={"#ffcc00"}>★★★</Text>
                        <Text>★★</Text>
                      </Flex>

                      {/* <Button bg={"#ffcc00"} color="#1e1e1e">
                        Add to Cart
                      </Button> */}
                     <AlertAddButton singleProduct={el} />
                    </Flex>
                  </Box>
                ))  : data?.map((el) => (
                  <Box
                    key={el.id}
                    padding={"10px"}
                    boxShadow={"2xl"}
                    borderRadius={"10px"}
                    borderTopLeftRadius={"60px"}
                  >
                    <Image
                      margin={"auto"}
                      w={"70%"}
                      h={"160px"}
                      src={el.img}
                      alt={"error"}
                    />
                    <Text
                      fontSize={"20px"}
                      fontFamily={"Times"}
                      textAlign={"start"}
                    >
                      {el.title}
                    </Text>
                    <Text
                      fontSize={"20px"}
                      fontFamily={"Times"}
                      textAlign={"start"}
                    >
                      {"₹ "}
                      {el.price}
                    </Text>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Flex>
                        <Text color={"#ffcc00"}>★★★</Text>
                        <Text>★★</Text>
                      </Flex>

                      {/* <Button bg={"#ffcc00"} color="#1e1e1e">
                        Add to Cart
                      </Button> */}
                     <AlertAddButton singleProduct={el} />
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Products;
