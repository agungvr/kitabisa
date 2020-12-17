import React, { memo } from 'react'
import { Box, Skeleton } from 'goods-core'

const CampaignItemSkeleton = memo(() => {
  return (
    <Box w mb='s'>
      <Skeleton
        w='100%'
        h={{
          xs: '162px',
          sm: '184px',
          md: '184px',
          lg: '224px',
        }}
        mb='xxs'
      />
      <Skeleton w='144px' h='24px' mb='xxs' />
      <Skeleton w h='8px' mb='xxs' radius='0' />
      <Box w fDir='row' fJustify='space-between'>
        <Box>
          <Skeleton w='64px' h='12px' mb='xxs' />
          <Skeleton w='120px' h='12px' />
        </Box>
        <Box fAlign='flex-end'>
          <Skeleton w='64px' h='12px' mb='xxs' />
          <Skeleton w='32px' h='12px' />
        </Box>
      </Box>
    </Box>
  )
})
CampaignItemSkeleton.whyDidYouRender = true

export default CampaignItemSkeleton
