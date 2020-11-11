import Image from 'next/image';
import NextLink from 'next/link';
import { Flex, Heading, Text, Box, Badge, Link } from '@chakra-ui/core';
import { tagBgColor, textColor, iconColor, borderColor } from '../styles/theme';

export default function Project({ title, desc, tags, img, url, colorMode }) {
  console.log(img.fields.title);
  return (
    <NextLink href={url} passHref>
      <Link
        href={url}
        title={title}
        isExternal
        _hover={{ textDecoration: 'none' }}
      >
        <Flex
          direction={['column-reverse', 'column-reverse', 'row-reverse']}
          align='center'
          justify='flex-end'
          borderWidth='1px'
          borderRadius='8px'
          borderColor={borderColor[colorMode]}
          p='6'
          w='100%'
          h={['312px', '312px', '168px']}
          mb='6'
        >
          <Box h='118px'>
            {tags.length > 0
              ? tags.map((tag) => (
                  <Badge backgroundColor={tagBgColor[colorMode]} mb='2' mr='2'>
                    {tag}
                  </Badge>
                ))
              : null}

            <Heading as='h3' size='lg' mb='4' color={textColor[colorMode]}>
              {title}
            </Heading>
            <Text color={iconColor[colorMode]}>{desc}</Text>
          </Box>
          <Box
            h='118px'
            w='118px'
            borderWidth='1px'
            borderRadius='8px'
            borderColor='white'
            mr={['0', '0', '4']}
            mb={['8', '8', '0']}
          >
            <Image
              src={`https:${img.fields.file.url}`}
              alt={img.fields.title}
              width='1000'
              height='1000'
              layout='responsive'
            />
          </Box>
        </Flex>
      </Link>
    </NextLink>
  );
}
