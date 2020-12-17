import React, { memo } from 'react'
import { Box, Text, Image } from 'goods-core'
import { formatIDR } from '@kitabisa/utils/helpers'

const CampaignItem = memo(
  ({ donation, image, title, daysRemaining, donationPercentage }) => {
    return (
      <Box w mb='s'>
        <Image
          src={image}
          h={{
            xs: '162px',
            sm: '184px',
            md: '184px',
            lg: '224px',
          }}
          w='100%'
          bg='white40'
          objectFit='cover'
          mb='xxs'
          radius='l'
          alt={title}
        />
        <Box
          w
          minH={{ xs: '24px', sm: '24px', md: '48px', lg: '72px' }}
        >
          <Text rule='subtitle' mb='xxs'>
            {title}
          </Text>
        </Box>
        <Box w h='8px' fAlign='flex-start' bg='white40' mb='xxs'>
          <Box
            w={`min(calc(100% * ${donationPercentage}), 100%)`}
            h='100%'
            bg='red60'
          />
        </Box>
        <Box w fDir='row' fJustify='space-between'>
          <Box>
            <Text mb='xxxs' c='black30'>
              Terkumpul
            </Text>
            <Text weight='bold'>{formatIDR(donation)}</Text>
          </Box>
          <Box fAlign='flex-end'>
            <Text mb='xxxs' c='black30'>
              Sisa Hari
            </Text>
            <Text weight='bold'>{daysRemaining}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
)
CampaignItem.whyDidYouRender = true

export default CampaignItem
