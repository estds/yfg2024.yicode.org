---
layout: page
title: "Accommodation booking"
lang: en
ref: accommodation-booking
parent: logistics-page
---
<!-- Modal -->
<div class="modal fade" id="reminder" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="submission-reminder" aria-hidden="true">
  <div class="modal-dialog modal-dial og-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Attention</h5>
      </div>
      <div class="modal-body">
        <p>By proceeding, you acknowledge that you have fully understood and agree to our <a href="/privacy"><b>privacy policies</b></a> and <a href="/logistics/#accommodation"><b>terms for booking accommodation</b></a>.</p>
        <p>Please don't use the "back" or "forward" buttons on this page as your work may be lost.</p>
      </div>
      <div class="modal-footer">
        <div class="btn-group w-100" role="group" aria-label="dialogue buttons">
          <a href="/logistics/#accommodation" class="btn btn-secondary">Go back to read</a>
          <button type="button" class="btn btn-primary" data-dismiss="modal">I would like to proceed</button>
        </div>
      </div>
    </div>
  </div>
</div>

The following form is for booking accommodation at Nanjing Dongjiao State Guesthouse Hotel. The prices for both twin-bed and king-bed rooms are 490 CNY/night/room. This is a subsidised price exclusively for participants of the Forum. You might be requested by the hotel to present documents to prove that you are taking part in the Forum, otherwise you might be required to pay at regular market price.

<iframe id="booking-form" class="embed-responsive-item w-100 border-0" scrolling="no" src="https://jrc.nhri.cn/app/mf/embed.php?id=32498" title="Accommodation Booking">Accommodation Booking</iframe>
<script src="https://cdn.jsdelivr.net/gh/estds/cdn-res/iframe-resizer/iframeResizer.min.js"></script>
<script>
  $("#reminder").modal('show');
  iFrameResize({ log: true }, '#booking-form');
</script>
