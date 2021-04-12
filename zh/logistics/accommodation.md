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

<p class="alert alert-warning small">论坛的<a href="/blog/2021/04/09/change-of-venue-zh">举办地点已经变更</a>。如果您之前已经预定住宿，秘书处应该已经与您联系并将您的预定转移至新的酒店，因此您不用再次预定。</p>
<p class="alert alert-info small">选项已经被预订完后将隐藏。</p>

<iframe id="booking-form" class="embed-responsive-item w-100 border-0" scrolling="no" src="https://jrc.nhri.cn/app/mf/embed.php?id=33247" title="Accommodation Booking">Accommodation Booking</iframe>
<script src="https://cdn.jsdelivr.net/gh/estds/cdn-res/iframe-resizer/iframeResizer.min.js"></script>
<script>
  $("#reminder").modal('show');
  iFrameResize({ log: true }, '#booking-form');
</script>
