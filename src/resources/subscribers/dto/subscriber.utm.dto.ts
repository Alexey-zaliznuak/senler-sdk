export interface Utm {
  // ID of the Senler tags is an
  // Example: 123
  utm_id: number;

  // Campaign source
  // Example: vk
  utm_source: string;

  // Traffic type
  // Example: cpc
  utm_medium: string;

  // Campaign name
  // Example: skid_ko_karte
  utm_campaign: string;

  // The ad ID
  // Example: banner
  utm_content: string;

  // Keyword
  // Example: order a chair online
  utm_term: string;
}
