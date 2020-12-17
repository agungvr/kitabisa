import React, { memo, useEffect, useMemo } from 'react'
import { Box } from 'goods-core'
import { useLazyFetch } from '@kitabisa/hooks/use-lazy-fetch'
import { url } from '@kitabisa/utils/constant'

import {
  useAppContext,
  actionsType,
} from '@kitabisa/context/app.context'
import CampaignItem from './item'
import CampaignItemSkeleton from './skeleton'

const useCampaignList = () => {
  const [{ campaignList }, dispatch] = useAppContext()
  const [fetchCampaign, { data }] = useLazyFetch()

  useEffect(() => {
    fetchCampaign(`${url.cors}${url.campaign}`)
  }, [])

  useEffect(() => {
    if (data) {
      dispatch({
        type: actionsType.SET_CAMPAIGN_LIST,
        payload: {
          campaignList: data,
        },
      })
    }
  }, [data])

  return {
    campaignList,
  }
}

const CampaignList = memo(() => {
  const { campaignList } = useCampaignList()

  const Content = useMemo(
    () => () => {
      if (campaignList) {
        return campaignList.map(item => (
          <CampaignItem
            key={item.id}
            title={item.title}
            image={item.image}
            donation={item.donation_received}
            daysRemaining={item.days_remaining}
            donationPercentage={item.donation_percentage}
          />
        ))
      }
      return [...new Array(6)].map((_, index) => (
        <CampaignItemSkeleton key={index} />
      ))
    },
    [campaignList]
  )

  return (
    <Box
      w
      d='grid'
      gap='24px'
      gTempCol={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
    >
      <Content />
    </Box>
  )
})
CampaignList.whyDidYouRender = true

export default CampaignList
