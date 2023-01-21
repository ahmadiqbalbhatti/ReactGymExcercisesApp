import {Box, Button, Stack, TextField, Typography} from "@mui/material";

const SearchExercises = () => {
    return (
        <Stack alignItems={'center'} mt={'2.375rem'} justifyContent={'center'} p={'1.5rem'}>
            <Stack>
                <Typography textAlign={'center'} fontWeight={'bold'} fontFamily={'Josefin Sans'} fontSize={'3rem'}>
                    Awesome Exercises You <br/>
                </Typography>
                <Typography textAlign={'center'} color={"#FF2625"} fontWeight={'bold'} fontFamily={'Josefin Sans'}
                            fontSize={'3rem'}>
                    Should Know
                </Typography>
            </Stack>
            <Box position={'relative'} mb={'5rem'} mt={"2rem"}>
                <TextField
                    height={'5rem'}
                    value={''}
                    onChange={(event) => {
                    }}
                    placeholder={"Search Exercises"}
                    type={"text"}
                    sx={{
                        input: {
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '0.75rem',
                        },
                        width: {
                            lg: '1170px',
                            xs: '350px'
                        },
                        justifyContent: 'space-around',
                        backgroundColor: '#FFF'
                    }}
                />
                <Button className={'search-btn'}

                        sx={{
                            backgroundColor: "#FF2625",
                            color: '#FFF',
                            textTransform: 'none',
                            width: {lg: "175px", xs: "80px"},
                            position: 'absolute',
                            right: 0, // Always try to use right 0 or left 0 with the property position absolute
                            height: '56px',
                        }}>
                    Search
                </Button>

            </Box>


        </Stack>
    );

}

export default SearchExercises;
