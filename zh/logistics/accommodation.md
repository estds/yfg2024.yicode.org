---
layout: page
title: "预定住宿"
lang: zh
ref: accommodation-booking
parent: logistics-page
---
<!-- Modal -->
<div class="modal fade" id="reminder" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="submission-reminder" aria-hidden="true">
  <div class="modal-dialog modal-dial og-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">注意</h5>
      </div>
      <div class="modal-body">
        <p>如您选择继续，我们将认为您已经完全理解并同意我们的 <a href="/zh/privacy"><b>隐私策略</b></a> 以及 <a href="/zh/logistics/#accommodation"><b>预定住宿的注意事项</b></a>。</p>
        <p>请不要在此页使用浏览器的前进和后退按钮，您可能会丢失填写的信息。</p>
      </div>
      <div class="modal-footer">
        <div class="btn-group w-100" role="group" aria-label="dialogue buttons">
          <a href="/zh/logistics/#accommodation" class="btn btn-secondary">返回阅读</a>
          <button type="button" class="btn btn-primary" data-dismiss="modal">我想继续</button>
        </div>
      </div>
    </div>
  </div>
</div>

<iframe id="booking-form" class="embed-responsive-item w-100 border-0" scrolling="no" src="https://jrc.nhri.cn/app/mf/embed.php?id=30430" title="Accommodation Booking">Accommodation Booking</iframe>
<script src="https://cdn.jsdelivr.net/gh/estds/cdn-res/iframe-resizer/iframeResizer.min.js"></script>
<script>
  $("#reminder").modal('show');
  iFrameResize({ log: true }, '#booking-form');
</script>
